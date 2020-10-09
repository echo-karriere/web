import React, { useState } from "react";
import * as yup from "yup";
import styles from "./Forms.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { isDev } from "../../config";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
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
  const { register, errors, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(interestSchema),
  });

  const submitForm = (data: FormData) => {
    if (isDev) {
      console.log(JSON.stringify(data, null, 2));
      setSubmitted(true);
    } else {
      axios
        .post("https://formcarry.com/s/Ho75s7HESzsQ", data, {
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
      <div className={styles.centered}>
        <h1>Takk for din søknad!</h1>
        <h2>Du hører fra oss fortløpende</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.centered}>
        <h1>Noe gikk galt :(</h1>
        <h2>Prøv igjen senere</h2>
      </div>
    );
  }

  return (
    <>
      <h2>Søk som styremedlem</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <section>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Søknad</legend>
            <label htmlFor="name_id">
              Navn
              {errors.name && (
                <span className={styles.error}> {errors.name.message}</span>
              )}
            </label>
            <input
              type="text"
              name="name"
              id="name_id"
              ref={register({ required: true })}
            />

            <label htmlFor="email_id">
              Epost
              {errors.email && (
                <span className={styles.error}> {errors.email.message}</span>
              )}
            </label>
            <input
              type="email"
              name="email"
              id="email_id"
              ref={register({ required: true })}
            />

            <label htmlFor="application">
              Søknadstekst
              {errors.application && (
                <span className={styles.error}>
                  {" "}
                  {errors.application.message}
                </span>
              )}
            </label>
            <textarea
              id="application"
              name="application"
              rows={4}
              cols={25}
              ref={register({ required: true })}
            />
            <div>
              <button type="submit">Send søknad</button>
            </div>
          </fieldset>
        </section>
      </form>
    </>
  );
}
