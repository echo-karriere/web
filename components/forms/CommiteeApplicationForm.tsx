import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { FormError, FormSubmitted, sendFormSubmission } from "./index";

type FormData = {
  name: string;
  email: string;
  studie: string;
  kull: string;
  application: string;
};

yup.setLocale({
  mixed: {
    required: "Du må fylle ut feltet",
  },
  string: {
    email: "Feltet må være en gyldig epost-adresse",
  },
});

const interestSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  application: yup.string().required(),
});

export function CommitteeApplication(): JSX.Element {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(interestSchema),
  });

  const submitForm = (data: FormData) =>
    sendFormSubmission(data, "https://formcarry.com/s/Ho75s7HESzsQ", setSubmitted, setError);

  if (submitted) return <FormSubmitted title="Takk for din søknad!" />;
  if (error) return <FormError />;

  return (
    <div className="py-16 px-4 overflow-hidden sm:bx-6 lg:px-8 lg:py24 lg:max-w-xl">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Bli styremedlem</h2>
      <p>Send inn din søknad her, så hører du fra oss så fort som mulig.</p>
      <div className="mt-12">
        <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" onSubmit={handleSubmit(submitForm)}>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name_id">
              Navn
              {errors.name && <span className="text-red-600 text-sm float-right">{errors.name.message}</span>}
            </label>
            <div className="mt-1">
              <input
                type="text"
                {...register("name", { required: true })}
                id="name_id"
                autoComplete="name"
                className="py-3 px-4 block w-full shadow-sm focus:ring-c6 focus:border-c6 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email_id">
              Epost
              {errors.email && <span className="text-red-600 text-sm float-right">{errors.email.message}</span>}
            </label>
            <div className="mt-1">
              <input
                type="email"
                {...register("email", { required: true })}
                id="email_id"
                autoComplete="email"
                className="py-3 px-4 block w-full shadow-sm focus:ring-c6 focus:border-c6 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="kull_id">
              Velg årskull
              {errors.name && <span className="text-red-600 text-sm float-right">{errors.name.message}</span>}
            </label>
            <div className="mt-1">
              <select
                className="py-3 px-4 block w-full shadow-sm focus:ring-c6 focus:border-c6 border-gray-300 rounded-md"
                id="kull_id"
                {...register("kull", { required: true })}
              >
                <option value="" disabled selected>
                  Velg årskull
                </option>
                <option value="1. årskull">1</option>
                <option value="2. årskull">2</option>
                <option value="3. årskull">3</option>
                <option value="4. årskull">4</option>
                <option value="5. årskull">5</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="studie_id">
              Velg studieretning
              {errors.name && <span className="text-red-600 text-sm float-right">{errors.name.message}</span>}
            </label>
            <div className="mt-1">
              <select
                className="py-3 px-4 block w-full shadow-sm focus:ring-c6 focus:border-c6 border-gray-300 rounded-md"
                id="studie_id"
                {...register("studie", { required: true })}
              >
                <option value="" disabled selected>
                  Velg studieretning
                </option>
                <option value="" disabled>
                  {" "}
                </option>
                <option value="" disabled>
                  Studieretninger ved UiB - Institutt for informatikk:
                </option>
                <option value="Informatikk, årsstudium - UiB II">Informatikk, årsstudium</option>
                <option value="Bioinformatikk - UiB II">Bioinformatikk</option>
                <option value="Data Science - UiB II">Data Science</option>
                <option value="Datateknologi - UiB II">Datateknologi</option>
                <option value="Datasikkerhet - UiB II">Datasikkerhet</option>
                <option value="IMØ - UiB II">Informatikk-matematikk-økonomi (IMØ)</option>
                <option value="Felles masterprogram i programutvikling - UiB II">
                  Felles masterprogram i programutvikling
                </option>
                <option value="Informatikk, master, 2 år - UiB II">Informatikk, master, 2 år</option>
                <option value="" disabled>
                  {" "}
                </option>
                <option value="" disabled>
                  Studieretninger ved UiB - Institutt for informasjons- og medievitenskap:{" "}
                </option>
                <option value="Informasjonsvitenskap, årsstudium - UiB IM">Informasjonsvitenskap, årsstudium</option>
                <option value="Informasjonsvitskap - UiB IM">Informasjonsvitskap</option>
                <option value="Kognitiv vitskap - UiB IM">Kognitiv vitskap</option>
                <option value="Kunstig intelligens - UiB IM">Kunstig intelligens</option>
                <option value="Medie- og interaksjonsdesign - UiB IM">Medie- og interaksjonsdesign</option>
                <option value="Informasjonsvitskap, master, 2 år - UiB IM">Informasjonsvitskap, master, 2 år</option>
                <option value="Medie- og interaksjonsdesign, master, 2 år - UiB IM">
                  Medie- og interaksjonsdesign, master, 2 år
                </option>
                <option value="" disabled>
                  {" "}
                </option>
                <option value="" disabled>
                  Andre studieretninger ved UiB:{" "}
                </option>
                <option value="Digital kultur - UiB">Digital kultur</option>
                <option value="Informasjonsteknologi og økonomi (ITØK) - UiB">
                  Informasjonsteknologi og økonomi (ITØK)
                </option>
                <option value="Digital kultur, master 2år - UiB">Digital kultur, master 2år</option>
                <option value="Annet - UiB">Andre relevante studier ved UiB - Spesifiser i søknadsteksten</option>
                <option value="" disabled>
                  {" "}
                </option>
                <option value="" disabled>
                  Studieretninger ved HVL (UVL):{" "}
                </option>
                <option value="Cyberfysisk nettverksteknologi - HVL">Cyberfysisk nettverksteknologi</option>
                <option value="Dataingeniør - HVL">Dataingeniør</option>
                <option value="Informasjonsteknologi | Bergen - HVL">Informasjonsteknologi | Bergen</option>
                <option value="Programutvikling - HVL">Programutvikling, Master 2 år</option>
                <option value="Annet - HVL">Annet - Spesifiser i søknadsteksten</option>
                <option value="" disabled>
                  {" "}
                </option>
                <option value="" disabled>
                  Studieretninger ved Høyskolen Kristiania:{" "}
                </option>
                <option value="Informasjonsteknologi - Frontend- og mobilutvikling - HK">
                  Informasjonsteknologi - Frontend- og mobilutvikling
                </option>
                <option value="Annet - HK">Annet - Spesifiser i søknadsteksten</option>
                <option value="" disabled>
                  {" "}
                </option>
                <option value="" disabled>
                  Studieretninger ved Noroff:{" "}
                </option>
                <option value="Frontend-utvikling - Noroff">Frontend-utvikling</option>
                <option value="3D design og spillteknologi - Noroff">3D design og spillteknologi</option>
                <option value="3D design og spillteknologi - Interaktiv - Noroff">
                  3D design og spillteknologi - Interaktiv
                </option>
                <option value="3D design og spillteknologi - Innholdsutvikling - Noroff">
                  3D design og spillteknologi - Innholdsutvikling
                </option>
                <option value="Nettverk og IT-sikkerhet - Noroff">Nettverk og IT-sikkerhet</option>
                <option value="Nettverks- og systemadministrasjon - Noroff">Nettverks- og systemadministrasjon</option>
                <option value="Annet - Noroff">Annet - Spesifiser i søknadsteksten</option>
                <option value="" disabled>
                  {" "}
                </option>
                <option value="" disabled>
                  Studieretninger ved Sjøkrigsskolen:{" "}
                </option>
                <option value="Bachelor i militære studier - fordypning ledelse og marineingeniør elektro - SKSK">
                  Bachelor i militære studier - fordypning ledelse og marineingeniør elektro
                </option>
                <option value="Bachelor i militære studier - fordypning ledelse og marineingeniør maskin - SKSK">
                  Bachelor i militære studier - fordypning ledelse og marineingeniør maskin
                </option>
                <option value="Bachelor i militære studier - fordypning ledelse og marineingeniør våpen, elektronikk og data - SKSK">
                  Bachelor i militære studier - fordypning ledelse og marineingeniør våpen, elektronikk og data
                </option>
                <option value="Annet - SKSK">Annet</option>
                <option value="" disabled>
                  {" "}
                </option>
                <option value="" disabled>
                  Annen relevant studieretning:{" "}
                </option>
                <option value="Annet">Annet - Spesifiser i søknadsteksten</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="application">
              Søknadstekst
              {errors.application && (
                <span className="text-red-600 text-sm float-right">{errors.application.message}</span>
              )}
            </label>
            <small>Skriv litt om hvem du er, og hvorfor du ønsker å søke til echo Karriere.</small>
            <textarea
              id="application"
              {...register("application", { required: true })}
              rows={4}
              cols={25}
              className="py-3 px-4 block w-full shadow-sm focus:ring-c6 focus:border-c6 border-gray-300 rounded-md"
            />
          </div>
          <div>
            <button
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-c8 hover:bg-c7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c6"
              type="submit"
            >
              Send søknad
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
