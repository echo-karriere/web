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
  day: "8" | "9";
  package: "small" | "large";
  workshop: boolean;
  workshopTitle?: string;
  talk: boolean;
  talkTitle?: string;
  banquet: "yes" | "no";
  other: string;
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
  day: yup.mixed().oneOf(["8", "9"]).required("Dere må velge en dag for deltakelse"),
  package: yup.mixed().oneOf(["small", "large"]).required("Dere må velge en grunnpakke"),
  workshop: yup.boolean().notRequired(),
  workshopTitle: yup.string().notRequired(),
  talk: yup.boolean().notRequired(),
  talkTitle: yup.string().notRequired(),
  banquet: yup.mixed().oneOf(["yes", "no"]).required(),
  other: yup.string().notRequired(),
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
  const watchTalk = watch("talk");

  if (submitted)
    return (
      <FormSubmitted body="Din bedrift er nå registrert, dere mottar en epost med bekreftelse straks. Om den ikke dukker opp med en gang sjekk søppelkurven." />
    );
  if (error) return <FormError />;

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">Påmelding echo karriere 2022</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Høstens arrangement er <strong>8. og 9. september 2022</strong>, og påmelding gjøres ved å fylle ut skjemaet
            under.
            <br />
            <br /> <strong>Påmeldingen vil åpne 2. mai ca. kl. 12:00*</strong>
            <br />
            <small className="text-red-500">*Endringer kan forekomme</small>
          </p>
        </div>
        <div className="mt-12"></div>
      </div>
    </div>
  );
}
