import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { isDev } from "../../config";

import styles from "./Forms.module.scss";

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

const InterestForm: React.FC = () => {
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
      <h1>Interesseskjema 2021</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <section>
          <h2>Din bedrift</h2>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Bedrift</legend>
            <label className={styles.label} htmlFor="comp_id">
              Navn
              {errors.company && (
                <span className={styles.error}> {errors.company.message}</span>
              )}
            </label>
            <input
              className={styles.input}
              type="text"
              name="company"
              id="comp_id"
              ref={register({ required: true })}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Kontaktperson</legend>
            <label className={styles.label} htmlFor="pers_id">
              Navn
              {errors.person && (
                <span className={styles.error}> {errors.person.message}</span>
              )}
            </label>
            <input
              className={styles.input}
              type="text"
              name="person"
              id="pers_id"
              ref={register({ required: true })}
            />

            <label className={styles.label} htmlFor="email_id">
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

            <label className={styles.label} htmlFor="num_id">
              Telefonnummer
              {errors.phone && (
                <span className={styles.error}> {errors.phone.message}</span>
              )}
            </label>
            <input
              className={styles.input}
              type="tel"
              name="phone"
              id="num_id"
              ref={register({ required: true })}
            />
          </fieldset>
        </section>
        <section>
          <h2>Ønsker</h2>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>echo karriere</legend>
            <label className={styles.label} htmlFor="day_id">
              Hvilken dag ønsker du å delta på?
            </label>
            <select
              className={styles.select}
              id="day_id"
              name="day"
              ref={register}
            >
              <option value="N/A">Ingen preferanse</option>
              <option value="17">Dag 1 (17. september)</option>
              <option value="18">Dag 2 (18. september)</option>
            </select>
            <label className={styles.label}>
              Ønsker dere å delta/arrangere noe på karrieredagen?
            </label>
            <ul className={styles.ul}>
              <li>
                <label className={styles.label} htmlFor="extra_work">
                  <input
                    type="checkbox"
                    id="extra_work"
                    name="workshop"
                    ref={register}
                  />
                  Workshop
                </label>
              </li>
              <li>
                <label className={styles.label} htmlFor="extra_talk">
                  <input
                    type="checkbox"
                    id="extra_talk"
                    name="talk"
                    ref={register}
                  />
                  Foredrag
                </label>
              </li>
              <li>
                <label className={styles.label} htmlFor="extra_speed">
                  <input
                    type="checkbox"
                    id="extra_speed"
                    name="lightningtalk"
                    ref={register}
                  />
                  Lynforedrag
                </label>
              </li>
              <li>
                <label className={styles.label} htmlFor="extra_pres">
                  <input
                    type="checkbox"
                    id="extra_pres"
                    name="presentation"
                    ref={register}
                  />
                  Lynpresentasjon
                </label>
              </li>
              <li>
                <label className={styles.label} htmlFor="extra_view">
                  <input
                    type="checkbox"
                    id="extra_view"
                    name="interview"
                    ref={register}
                  />
                  Lynintervju
                </label>
              </li>
            </ul>

            <label className={styles.label}>
              Ønsker dere å delta på vår bankett?
              {errors.banquet && (
                <span className={styles.error}> {errors.banquet.message}</span>
              )}
            </label>
            <ul className={styles.ul}>
              <li>
                <label className={styles.label} htmlFor="banquet_yes">
                  <input
                    type="radio"
                    id="banquet_yes"
                    name="banquet"
                    value="yes"
                    ref={register({ required: true })}
                  />
                  Ja
                </label>
              </li>
              <li>
                <label className={styles.label} htmlFor="banquet_no">
                  <input
                    type="radio"
                    id="banquet_no"
                    name="banquet"
                    value="no"
                    ref={register({ required: true })}
                  />
                  Nei
                </label>
              </li>
              <li>
                <label className={styles.label} htmlFor="banquet_maybe">
                  <input
                    type="radio"
                    id="banquet_maybe"
                    name="banquet"
                    value="maybe"
                    ref={register({ required: true })}
                  />
                  Usikker/kanskje
                </label>
              </li>
            </ul>
          </fieldset>
        </section>
        <section>
          <h2>Annet</h2>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Diverse</legend>
            <label className={styles.label} htmlFor="other">
              Har dere noe annet på hjertet?
            </label>
            <textarea
              className={styles.textarea}
              id="other"
              name="other"
              rows={4}
              cols={25}
              ref={register}
            />
          </fieldset>
        </section>
        <section>
          <h2>Til slutt...</h2>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Bekreftelse</legend>
            <div style={{ paddingBottom: "0.5rem" }}>
              <input
                type="checkbox"
                id="conf_id"
                name="confirmation"
                ref={register({ required: true })}
              />
              <label className={styles.label} htmlFor="conf_id">
                Vi vil med dette melde vår <strong>interesse</strong> for{" "}
                <em>echo karriere</em> 2021.
                {errors.confirmation && (
                  <span className={styles.error}> Du må bekrefte</span>
                )}
              </label>
            </div>
            <div>
              <input type="submit" value="Meld interesse" />
            </div>
          </fieldset>
        </section>
      </form>
    </>
  );
};

export default InterestForm;
