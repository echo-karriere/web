import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import axios from "axios";
import * as yup from "yup";
import { isDev } from "../../config";

import styles from "./Forms.module.scss";

type FormData = {
  name: string;
  email: string;
  message: string;
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
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

const ContactUs: React.FC = () => {
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
        .post("https://formcarry.com/s/i4fH6eGjGEzY", data, {
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
        <h1>Takk!</h1>
        <h2>Du hører fra oss så snart som mulig.</h2>
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
      <h2>Kontakt oss</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <section>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Kontakt</legend>
            <label htmlFor="name_id" className={styles.label}>
              Navn
              {errors.name && (
                <span className={styles.error}> {errors.name.message}</span>
              )}
            </label>
            <input
              className={styles.input}
              type="text"
              name="name"
              id="name_id"
              ref={register({ required: true })}
            />

            <label htmlFor="email_id" className={styles.label}>
              Epost
              {errors.email && (
                <span className={styles.error}> {errors.email.message}</span>
              )}
            </label>
            <input
              className={styles.input}
              type="email"
              name="email"
              id="email_id"
              ref={register({ required: true })}
            />

            <label htmlFor="message" className={styles.label}>
              Melding
              {errors.message && (
                <span className={styles.error}> {errors.message.message}</span>
              )}
            </label>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              rows={4}
              cols={25}
              ref={register}
            />
            <div>
              <input
                className={styles.input}
                type="submit"
                value="Send melding"
              />
            </div>
          </fieldset>
        </section>
      </form>
    </>
  );
};

export default ContactUs;
