import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { FormError, FormSubmitted, sendFormSubmission } from ".";

type RegistrationFormData = {
  company: string;
  website: string;
  logo: FileList;
  contactPerson: string;
  email: string;
  contactPhone: number;
  invoiceAddress: string;
  invoiceOrg: string;
  invoicePerson: string;
  invoiceEmail: string;
  day: "9" | "both";
  package: "yes";
  workshop: boolean;
  workshopTitle?: string;
  talk: boolean;
  banquet: "yes" | "no";
  other: string;
  found: string;
  confirmation: boolean;
};

yup.setLocale({
  mixed: {
    required: "Dere må fylle ut dette feltet",
    oneOf: "Dere må velge et alternativ",
    notType: "Feltet er ikke i riktig format",
  },
  string: {
    email: "Feltet må være en gyldig epost-adresse",
    url: "Feltet må være en adresse for en nettside",
  },
  number: {
    integer: "Feltet må være et gyldig nummer",
  },
});

const registrationShape = yup.object().shape({
  company: yup.string().required(),
  website: yup.string().url().required(),
  logo: yup
    .mixed()
    .nullable()
    .test("hasLogo", "Dere må laste opp en logo", (val) => {
      return val === null || val.length !== 0;
    })
    .test("size", "Et eller flere av bildene er for store", (val) => {
      if (val === null) return true;
      for (const file of val) {
        if (file && file.size <= 10_000_000) return true;
      }
      return false;
    })
    .required("Dere må laste opp en logo"),
  contactPerson: yup.string().required(),
  email: yup.string().email().required(),
  contactPhone: yup.number().required(),
  invoiceAddress: yup.string().required(),
  invoiceOrg: yup.string().required(),
  invoicePerson: yup.string().required(),
  invoiceEmail: yup.string().email().required(),
  day: yup.mixed().oneOf(["9", "both"]).required("Dere må velge en dag for deltakelse"),
  package: yup.mixed().oneOf(["yes"]).required("Grunnpakken er obligatorisk, og må velges."),
  workshop: yup.boolean().notRequired(),
  workshopTitle: yup.string().notRequired(),
  talk: yup.boolean().notRequired(),
  banquet: yup.mixed().oneOf(["yes", "no"]).required(),
  other: yup.string().notRequired(),
  found: yup.string().notRequired(),
  confirmation: yup
    .boolean()
    .test("confirm", "Dere må bekrefte å ha lest vilkårene", (val) => val === null || Boolean(val))
    .required(),
});

const formFieldsToFormData = (data: RegistrationFormData): FormData => {
  const form = new FormData();

  for (const [key, val] of Object.entries(data)) {
    form.set(key, `${val}`);
  }
  form.delete("logo");
  Object.entries(data.logo).forEach(([, val], i) => {
    form.set(`logo-${i}`, val);
  });

  return form;
};

export function RegistrationForm(): JSX.Element {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationShape),
  });

  const submitForm = (data: RegistrationFormData) => {
    setIsSubmitting(true);
    sendFormSubmission(formFieldsToFormData(data), "https://formcarry.com/s/UDFKqaUK5-M", setSubmitted, setError);
  };

  const watchWorkshop = watch("workshop");

  if (submitted)
    return (
      <FormSubmitted body="Din bedrift er nå registrert, dere mottar en epost fra noreply@echokarriere.no med bekreftelse straks. Om den ikke dukker opp med en gang sjekk søppelkurven." />
    );
  if (error) return <FormError />;

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">Påmelding echo karriere 2022</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Høstens arrangement er <strong>8. og 9. september 2022</strong>, og påmelding skal gjøres via våre skjemaet
            under. Sørg for at alle punktene er lest og forstått samt innholdet i{" "}
            <Link href="/files/invitation.pdf">
              <a target="_blank" className="underline">
                invitasjonen
              </a>
            </Link>
            .
          </p>
        </div>
        <div className="mt-6">
          <form
            className="space-y-8 divide-y divide-gray-200"
            onSubmit={handleSubmit(submitForm)}
            encType="multipart/form-data"
          >
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Bedriftsinformasjon</h3>
                  <p className="mt-1 text-sm text-gray-500">Informasjon om din bedrift.</p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label htmlFor="comp_id" className="block text-sm font-medium text-gray-700">
                      Bedriftsnavn
                      {errors.company && (
                        <span className="text-red-500 text-xs float-right">{errors.company.message}</span>
                      )}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        {...register("company", { required: true })}
                        id="comp_id"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                      Nettside
                      {errors.website && (
                        <span className="text-red-500 text-xs float-right">{errors.website.message}</span>
                      )}
                      <p className="mt-1 text-sm text-gray-500">
                        Merk at vi trenger hele domenet, inkludert <code className="text-sm">https://</code>.
                      </p>
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        placeholder="https://www.nettside.no"
                        {...register("website", { required: true })}
                        id="website"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="logo" className="block text-sm font-medium text-gray-700">
                      Logo
                      {errors.logo && <span className="text-red-500 text-xs float-right">{errors.logo.message}</span>}
                    </label>
                    <p className="mt-1 text-sm text-gray-500">
                      Helst en logo i filformatet SVG, men dersom det ikke er tilgjengelig er andre bildeformater også
                      godkjent. Om dere vil kan flere logoer lastes opp. Vil bli brukt på vår nettside for å vise hvilke
                      bedrifter som deltar/på jobboversikten.
                    </p>
                    <div className="mt-1">
                      <input
                        type="file"
                        accept="image/*,.svg"
                        {...register("logo", { required: true })}
                        id="logo"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        multiple
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Kontaktinformasjon</h3>
                  <p className="mt-1 text-sm text-gray-500">Hvem skal brukes som kontaktperson fra deres bedrift?</p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label htmlFor="contact_person" className="block text-sm font-medium text-gray-700">
                      Navn
                      {errors.contactPerson && (
                        <span className="text-red-500 text-xs float-right">{errors.contactPerson.message}</span>
                      )}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        autoComplete="name"
                        {...register("contactPerson", { required: true })}
                        id="contact_person"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Epost
                      {errors.email && <span className="text-red-500 text-xs float-right">{errors.email.message}</span>}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        autoComplete="on"
                        {...register("email", { required: true })}
                        id="email"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="contact_phone" className="block text-sm font-medium text-gray-700">
                      Telefon
                      {errors.contactPhone && (
                        <span className="text-red-500 text-xs float-right">{errors.contactPhone.message}</span>
                      )}
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        autoComplete="on"
                        {...register("contactPhone", { required: true })}
                        id="contact_phone"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Fakturainformasjon</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Informasjon for å kunne sende faktura til bedriften deres.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label htmlFor="invoice_email" className="block text-sm font-medium text-gray-700">
                      Epost for mottakelse av faktura
                      {errors.invoiceEmail && (
                        <span className="text-red-500 text-xs float-right">{errors.invoiceEmail.message}</span>
                      )}
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        autoComplete="on"
                        {...register("invoiceEmail", { required: true })}
                        id="invoice_email"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="invoice_org" className="block text-sm font-medium text-gray-700">
                      Organisasjonsnummer
                      {errors.invoiceOrg && (
                        <span className="text-red-500 text-xs float-right">{errors.invoiceOrg.message}</span>
                      )}
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        {...register("invoiceOrg", { required: true })}
                        id="invoice_org"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="invoice_person" className="block text-sm font-medium text-gray-700">
                      Kontaktperson for faktura
                      {errors.invoicePerson && (
                        <span className="text-red-500 text-xs float-right">{errors.invoicePerson.message}</span>
                      )}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        autoComplete="name"
                        {...register("invoicePerson", { required: true })}
                        id="invoice_person"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="invoice_address" className="block text-sm font-medium text-gray-700">
                      Fakturaadresse
                      {errors.invoiceAddress && (
                        <span className="text-red-500 text-xs float-right">{errors.invoiceAddress.message}</span>
                      )}
                    </label>
                    <div className="mt-1">
                      <textarea
                        {...register("invoiceAddress", { required: true })}
                        id="invoice_address"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        rows={4}
                        cols={25}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Karrieredagen</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Velg ønsket dag, pakke og eventuelle ekstra på selve dagen.
                  </p>
                </div>
                <fieldset className="mt-6">
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Dato for deltakelse
                      {errors.day && <span className="text-red-500 text-xs float-right">{errors.day.message}</span>}
                    </legend>
                    <p className="text-sm text-gray-500">Når ønsker dere å delta?</p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="sep_9"
                        {...register("day", { required: true })}
                        value="9"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor="sep_9" className="ml-3 block text-sm font-medium text-gray-700">
                        Bare 9. september
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="both"
                        {...register("day", { required: true })}
                        value="both"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor="both" className="ml-3 block text-sm font-medium text-gray-700">
                        8. og 9. september
                      </label>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="mt-6">
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Hvilken pakkeløsninger vil dere ha?
                      {errors.package && (
                        <span className="text-red-500 text-xs float-right">{errors.package.message}</span>
                      )}
                    </legend>
                    <p className="text-sm text-gray-500">Grunnpakken er obligatorisk</p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="package_yes"
                        {...register("package", { required: true })}
                        value="yes"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor="package_yes" className="ml-3 block text-sm font-medium text-gray-700">
                        Grunnpakke
                      </label>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="mt-6">
                  <legend className="text-base text-gray-900">
                    Kan dere se for dere at dere ønsker å arrangere noe på karrieredagen?
                  </legend>
                  <div className="mt-4 space-y-4">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          id="extra_work"
                          {...register("workshop")}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="extra_work" className="font-medium text-gray-700">
                          Workshop
                        </label>
                        <p className="text-gray-500">En praktisk workshop med et begrenset antall deltakere.</p>
                      </div>
                    </div>
                    {watchWorkshop && (
                      <div className="sm:col-span-3">
                        <label htmlFor="workshop_title" className="block text-sm font-medium text-gray-700">
                          Tema for workshop (ikke obligatorisk før 15. august. Dere vil også motta en liste med ønsket
                          tema fra studentene senere.)
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            {...register("workshopTitle")}
                            id="workshop_title"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    )}
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          id="extra_talk"
                          {...register("talk")}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="extra_talk" className="font-medium text-gray-700">
                          Konseptpresentasjon
                        </label>
                        <p className="text-gray-500">Utvidet presentasjon av bedriften på 20 minutter.</p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="mt-6">
                  <div>
                    <legend className="text-base font-medium text-gray-900">
                      Bankett
                      {errors.banquet && (
                        <span className="text-red-500 text-xs float-right">{errors.banquet.message}</span>
                      )}
                    </legend>
                    <p className="text-sm text-gray-500">Vil dere delta på en bankett? Se invitasjon for mer.</p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="banquet_yes"
                        {...register("banquet", { required: true })}
                        value="yes"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor="banquet_yes" className="ml-3 block text-sm font-medium text-gray-700">
                        Ja
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="banquet_no"
                        {...register("banquet", { required: true })}
                        value="no"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor="banquet_no" className="ml-3 block text-sm font-medium text-gray-700">
                        Nei
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Annet</h3>
                  <p className="mt-1 text-sm text-gray-500">Har dere noe annet på hjertet?</p>
                </div>
                <div>
                  <fieldset>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                      <div className="sm:col-span-3">
                        <label htmlFor="other" className="block text-sm font-medium text-gray-700">
                          Melding
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="other"
                            {...register("other")}
                            rows={4}
                            cols={25}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Om det skulle være noe mer, skriv det gjerne her!</p>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div>
                  <fieldset>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                      <div className="sm:col-span-3">
                        <label htmlFor="found" className="block text-sm font-medium text-gray-700">
                          Hvordan fant dere påmeldingen til karrieredagen?
                        </label>

                        <div className="mt-1">
                          <textarea
                            id="found"
                            {...register("found")}
                            rows={4}
                            cols={25}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Valgfritt å svare på, men vi setter stor pris om dere velger å gjøre det. Dette hjelper oss
                          med å forbedre påmeldingsopplevelsen.
                        </p>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Bekreftelse
                    {errors.confirmation && (
                      <span className="text-red-500 text-xs float-right">{errors.confirmation.message}</span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Med dette bekrefter dere blant annet følgende, samt vilkårene som fremkommer av invitasjonen:
                  </p>
                  <p className="italic pt-2">
                    Ettersom det er begrenset antall plasser, vil vi praktisere bindende påmelding. Dersom
                    betalingsfristen ikke overholdes, vil deres plass på arrangementet automatisk falle bort. Dersom
                    dere ikke møter, eller avbestiller etter at påmelding og betaling har skjedd, vil ikke innbetalt
                    forskudd refunderes. Det samme gjelder dersom dere ikke overholder obligatoriske frister for
                    tilbakemelding. Vi er avhengig av at bedriftene overholder sin del, slik at vi sammen får til et
                    velfungerende arrangement.
                  </p>
                </div>
                <div>
                  <fieldset>
                    <div className="mt-4 space-y-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            id="confirmation"
                            {...register("confirmation", { required: true })}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="confirmation" className="block text-sm font-medium text-gray-700">
                            Vi bekrefter at vi har lest vilkårene og aksepterer vilkårene for kontrakten.
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className="pt-5">
                <div className="mt-4 sm:col-span-2">
                  <button
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-c8 hover:bg-c7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c6"
                    type="submit"
                  >
                    {isSubmitting ? "Sender din respons..." : "Send inn"}
                  </button>
                </div>
              </div>
            </div>
          </form>
          <p className="pt-6">
            Opplever dere problemer med påmeldingsskjemaet? kontakt webansvarlig på{" "}
            <a className="underline" href="mailto:sebastian.helgesen@echokarriere.no">
              e-post
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
