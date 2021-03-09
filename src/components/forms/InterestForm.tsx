import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { isDev } from "../../config";

type FormData = {
  company: string;
  person: string;
  email: string;
  phone: number;
  day: "none" | "day1" | "day2";
  banquet: "yes" | "no";
  other: string;
  confirmation: boolean;
};

yup.setLocale({
  mixed: {
    required: "Du må fylle ut dette feltet",
    oneOf: "Du må velge et alternativ",
    notType: "Feltet må være et gyldig nummer",
  },
  string: {
    email: "Feltet må være en gyldig epost-adresse",
  },
  number: {
    integer: "Feltet må være et gyldig nummer",
  },
});

const interestSchema = yup.object().shape({
  company: yup.string().required(),
  person: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().integer().required(),
  day: yup.mixed().oneOf(["N/A", "17", "18"]).required(),
  extra: yup
    .mixed()
    .oneOf(["workshop", "talk", "lightningtalk", "presentation", "interview"])
    .notRequired(),
  banquet: yup.mixed().oneOf(["yes", "no", "maybe"]).notRequired(),
  other: yup.string().notRequired(),
  confirmation: yup.boolean().oneOf([true], " Du må bekrefte").required(),
});

export function InterestForm(): JSX.Element {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const { register, errors, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(interestSchema),
  });
  const submitForm = (data: FormData) => {
    if (isDev) {
      console.log(JSON.stringify(data, null, 2));
      setSubmitted(true);
    } else {
      axios
        .post("https://formcarry.com/s/DTkwrilmrEEd", data, {
          headers: { Accept: "application/json" },
        })
        .then((res) => {
          if (res.status === 200) {
            setSubmitted(res.status === 200);
          } else {
            setError(true);
          }
        })
        .catch(() => {
          setError(true);
        });
    }
  };

  if (submitted) {
    return (
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 h-96 flex flex-col justify-center items-center">
        <div className="relative max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Takk!
            </h1>
            <h2>Du hører fra oss så snart som mulig.</h2>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 h-96 flex flex-col justify-center items-center">
        <div className="relative max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Noe gikk galt :(
            </h1>
            <h2>Prøv igjen senere</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Interesseskjema
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Fyll ut dette skjemaet dersom dere har vil delta på fremtidige
            arrangementer og bli kontaktet av oss.
          </p>
        </div>
        <div className="mt-12">
          <form
            className="space-y-8 divide-y divide-gray-200"
            onSubmit={handleSubmit(submitForm)}
          >
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Bedrift
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Informasjon om din bedrift.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="comp_id"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Navn
                      {errors.company && (
                        <span className="text-red-500 text-xs float-right">
                          {errors.company.message}
                        </span>
                      )}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="comp_id"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        ref={register({ required: true })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Kontaktperson
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Hvem skal vi kontakte i fremtiden?
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="pers_id"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Navn
                      {errors.person && (
                        <span className="text-red-500 text-xs float-right">
                          {errors.person.message}
                        </span>
                      )}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="person"
                        id="pers_id"
                        autoComplete="full-name"
                        ref={register({ required: true })}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email_id"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Epost
                      {errors.email && (
                        <span className="text-red-500 text-xs float-right">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email_id"
                        name="email"
                        type="email"
                        autoComplete="email"
                        ref={register({ required: true })}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="num_id"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Telefonnummer
                      {errors.phone && (
                        <span className="text-red-500 text-xs float-right">
                          {errors.phone.message}
                        </span>
                      )}
                    </label>
                    <div className="mt-1">
                      <input
                        id="num_id"
                        name="phone"
                        type="tel"
                        autoComplete="phone"
                        ref={register({ required: true })}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Ønsker
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Meld konkret interesse for aktiviter på selve dagen.
                  </p>
                </div>
                <div className="mt-6">
                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">
                      Hvilken dag ønsker dere å delta på?
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div>
                        <div className="mt-1">
                          <select
                            id="day_id"
                            name="day"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            ref={register}
                          >
                            <option value="N/A">Ingen preferanse</option>
                            <option value="17">Dag 1 (17. september)</option>
                            <option value="18">Dag 2 (18. september)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mt-6">
                    <legend className="text-base font-medium text-gray-900">
                      Ønsker dere å delta/arrangere noe på karrieredagen?
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            id="extra_work"
                            name="workshop"
                            ref={register}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="extra_work"
                            className="font-medium text-gray-700"
                          >
                            Workshop
                          </label>
                          <p className="text-gray-500">
                            Arranger en praktisk workshop med et begrenset
                            antall deltakere.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            id="extra_talk"
                            name="talk"
                            ref={register}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="extra_talk"
                            className="font-medium text-gray-700"
                          >
                            Foredrag
                          </label>
                          <p className="text-gray-500">
                            Hold et lengre foredrag (presentasjon, 40-60
                            minutter).
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            id="extra_speed"
                            name="lightningtalk"
                            ref={register}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="extra_speed"
                            className="font-medium text-gray-700"
                          >
                            Lynforedrag
                          </label>
                          <p className="text-gray-500">
                            Hold et kortere foredrag (15-20 minutter).
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            id="extra_pres"
                            name="presentation"
                            ref={register}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="extra_pres"
                            className="font-medium text-gray-700"
                          >
                            Lynpresentasjon
                          </label>
                          <p className="text-gray-500">
                            Vil dere delta på lynpresentasjonene på begynnelsen
                            av dagen?
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            id="extra_view"
                            name="interview"
                            ref={register}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="extra_pres"
                            className="font-medium text-gray-700"
                          >
                            Lynintervju
                          </label>
                          <p className="text-gray-500">
                            Vil dere ha mulighet til å gjennomføre lynintervju
                            på selve dagen?
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="pt-8">
                  <fieldset className="mt-6">
                    <div>
                      <legend className="text-base font-medium text-gray-900">
                        Bankett
                      </legend>
                      <p className="text-sm text-gray-500">
                        Ønsker dere å delta på vår bankett på kvelden siste dag?
                      </p>
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="banquet_yes"
                          name="banquet"
                          value="yes"
                          ref={register({ required: true })}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label
                          htmlFor="banquet_yes"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Ja
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="banquet_no"
                          name="banquet"
                          value="no"
                          ref={register({ required: true })}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label
                          htmlFor="banquet_no"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Nei
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="banquet_maybe"
                          name="banquet"
                          value="maybe"
                          ref={register({ required: true })}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label
                          htmlFor="banquet_maybe"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Usikker/kanskje
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Annet
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Har dere noe annet på hjertet?
                  </p>
                </div>
                <div>
                  <fieldset>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Melding
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="other"
                            name="other"
                            rows={4}
                            cols={25}
                            ref={register}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          ></textarea>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Om det skulle være noe mer, skriv det gjerne her!
                        </p>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className="pt-8">
                <fieldset>
                  <legend className="text-base font-medium text-gray-900">
                    Til slutt...
                  </legend>
                  <div className="mt-4 space-y-4">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          id="conf_id"
                          name="confirmation"
                          ref={register({ required: true })}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="conf_id"
                          className="font-medium text-gray-700"
                        >
                          Vi vil med dette melde vår <strong>interesse</strong>{" "}
                          for <em>echo karriere</em> 2021.
                          {errors.confirmation && (
                            <span className="text-red-500 text-xs float-right">
                              Du må bekrefte
                            </span>
                          )}
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="pt-5">
                <div className="mt-4 sm:col-span-2">
                  <button
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-c8 hover:bg-c7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c6"
                    type="submit"
                  >
                    Meld interesse
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
