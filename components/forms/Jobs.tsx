import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { FormError, sendFormSubmission } from ".";

type JobRegistrationData = {
  company: string;
  location: string;
  title: string;
  link: string;
  type: "full" | "part" | "summer" | "other";
  description: string;
  deadline: Date;
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
  location: yup.string().required(),
  title: yup.string().required(),
  link: yup.string().url().required(),
  description: yup.string().required(),
  type: yup.string().oneOf(["full", "part", "summer", "other"]),
  deadline: yup.date().required(),
});

export function JobRegistrationForm(): JSX.Element {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<JobRegistrationData>({
    resolver: yupResolver(registrationShape),
  });

  const submitForm = (data: JobRegistrationData) => {
    setIsSubmitting(true);
    sendFormSubmission<JobRegistrationData>(data, "https://formcarry.com/s/ZYdgMndvu0x", setSubmitted, setError);
  };

  const resetForm = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setError(false);
    reset({ company: getValues("company"), location: getValues("location") });
  };

  if (submitted)
    return (
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 h-96 flex flex-col justify-center items-center">
        <div className="relative max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Takk!</h1>
            <h2>Vi vil legge ut annonsen straks!</h2>
            <div className="py-6">
              <button
                onClick={resetForm}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-c8 hover:bg-c7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c6"
              >
                Send ny
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  if (error) return <FormError />;

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">Send inn dine stillinger</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            For å enkelt få stillingsannonser inn på jobboversikten kan dere bruke denne formen.
          </p>
        </div>
        <div className="mt-12">
          <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit(submitForm)}>
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Stillingsopplysninger</h3>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Bedrift
                      {errors.company && (
                        <span className="text-red-500 text-xs float-right">{errors.company.message}</span>
                      )}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        {...register("company", { required: true })}
                        id="company"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                      Sted
                      {errors.location && (
                        <span className="text-red-500 text-xs float-right">{errors.location.message}</span>
                      )}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        {...register("location", { required: true })}
                        id="location"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Stillingstittel
                      {errors.title && <span className="text-red-500 text-xs float-right">{errors.title.message}</span>}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        {...register("title", { required: true })}
                        id="title"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Beskrivelse
                      {errors.description && (
                        <span className="text-red-500 text-xs float-right">{errors.description.message}</span>
                      )}
                    </label>
                    <p className="mt-1 text-sm text-gray-500">Et par linjer med beskrivelse av stillingen.</p>
                    <div className="mt-1">
                      <textarea
                        rows={4}
                        cols={25}
                        {...register("description", { required: true })}
                        id="description"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                      Lenke til stilling
                      {errors.link && <span className="text-red-500 text-xs float-right">{errors.link.message}</span>}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        {...register("link", { required: true })}
                        id="link"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                      Stillingstype
                      {errors.type && <span className="text-red-500 text-xs float-right">{errors.type.message}</span>}
                    </label>
                    <div className="mt-1">
                      <select
                        id="type"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        {...register("type", { required: true })}
                      >
                        <option value="full">Fulltid</option>
                        <option value="part">Deltid</option>
                        <option value="summer">Sommerjobb</option>
                        <option value="other">Annet</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
                      Siste frist
                      {errors.deadline && (
                        <span className="text-red-500 text-xs float-right">{errors.deadline.message}</span>
                      )}
                    </label>
                    <p className="mt-1 text-sm text-gray-500">
                      Dersom det er en fulltidsstilling kan du ignorere sluttfristen.
                    </p>
                    <div className="mt-1">
                      <input
                        type="date"
                        defaultValue={new Date().toISOString().split("T")[0]}
                        min="2021-08-01"
                        max="2022-12-12"
                        {...register("deadline")}
                        id="title"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
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
        </div>
      </div>
    </div>
  );
}
