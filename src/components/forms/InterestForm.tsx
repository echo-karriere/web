import { useState } from "react";
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
  type: "both" | "digital" | "physical" | "none";
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
  type: yup.mixed().oneOf(["both", "digital", "physical", "none"]).required(),
  extra: yup.mixed().oneOf(["workshop", "talk", "lightningtalk"]).notRequired(),
  banquet: yup.mixed().oneOf(["yes", "no", "maybe"]).notRequired(),
  other: yup.string().notRequired(),
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
        .post("https://formcarry.com/s/NnAXW6UPoF", data, {
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
            <h2>Ditt svar er registrert.</h2>
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
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Ønsket arrangementstype
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Vi har startet planleggningen av karrieredagen{" "}
            <strong>16. og 17. september 2021</strong>. På grunn av dagens
            situasjon ønsker vi å vite om dere ønsker at vi holder karrieredagen
            fysisk eller digital.
          </p>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Påmeldingen for karrieredagen vi skje <strong>10. mai 2021</strong>.
            Informasjon om påmelding og vilkår vil på forhånd bli sendt ut på
            mail og blir lagt ut på våre nettsider.
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
                    Bedriftsinformasjon
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
                      Bedriftsnavn
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
                    Ønsker
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Velg ønsket arrangementstype og eventuelle tanker om å holde
                    noe ekstra.
                  </p>
                </div>
                <div className="mt-6">
                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">
                      Hva slags arrangement ser dere for dere at dere kan delta
                      på?
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div>
                        <div className="mt-1">
                          <select
                            id="day_id"
                            name="type"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            ref={register({ required: true })}
                          >
                            <option value="both">
                              Kan delta både fysisk og digital
                            </option>
                            <option value="physical">
                              Kan kun delta dersom det blir fysisk
                            </option>
                            <option value="digital">
                              Kan kun delta dersom det blir digitalt
                            </option>
                            <option value="none">Kan ikke delta</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mt-6">
                    <legend className="text-base font-medium text-gray-900">
                      Kan dere se for dere at dere ønsker å arrangere noe på
                      karrieredagen?
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
                            En praktisk workshop med et begrenset antall
                            deltakere.
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
                            Et lengre foredrag (presentasjon, 40-60 minutter).
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
                            Et kortere foredrag (15 minutter).
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
                        Ved en fysisk karrieredag, er dere interessert i å delta
                        på bankett?
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
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Om det skulle være noe mer, skriv det gjerne her!
                        </p>
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
                    Send inn
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
