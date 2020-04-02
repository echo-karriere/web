import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import {
  CenteredContainer,
  Fieldset,
  Legend,
  Label,
  Input,
  Select,
  Ul,
  TextArea,
  Error,
} from "./common";

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

export default function InterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const { register, errors, handleSubmit } = useForm<FormData>({
    validationSchema: interestSchema,
  });
  const submitForm = (data: FormData) => {
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
  };

  if (submitted) {
    return (
      <CenteredContainer>
        <h1>Takk!</h1>
        <h2>Du hører fra oss så snart som mulig.</h2>
      </CenteredContainer>
    );
  }

  if (error) {
    return (
      <CenteredContainer>
        <h1>Noe gikk galt :(</h1>
        <h2>Prøv igjen senere</h2>
      </CenteredContainer>
    );
  }

  return (
    <>
      <h1>Interesseskjema 2020</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <section>
          <h2>Din bedrift</h2>

          <Fieldset>
            <Legend>Bedrift</Legend>
            <Label htmlFor="comp_id">
              Navn
              {errors.company && <Error> {errors.company.message}</Error>}
            </Label>
            <Input
              type="text"
              name="company"
              id="comp_id"
              ref={register({ required: true })}
            />
          </Fieldset>

          <Fieldset>
            <Legend>Kontaktperson</Legend>
            <Label htmlFor="pers_id">
              Navn
              {errors.person && <Error> {errors.person.message}</Error>}
            </Label>
            <Input
              type="text"
              name="person"
              id="pers_id"
              ref={register({ required: true })}
            />

            <Label htmlFor="email_id">
              Epost
              {errors.email && <Error> {errors.email.message}</Error>}
            </Label>
            <Input
              type="email"
              name="email"
              id="email_id"
              ref={register({ required: true })}
            />

            <Label htmlFor="num_id">
              Telefonnummer
              {errors.phone && <Error> {errors.phone.message}</Error>}
            </Label>
            <Input
              type="tel"
              name="phone"
              id="num_id"
              ref={register({ required: true })}
            />
          </Fieldset>
        </section>
        <section>
          <h2>Ønsker</h2>
          <Fieldset>
            <Legend>echo karriere</Legend>
            <Label htmlFor="day_id">Hvilken dag ønsker du å delta på?</Label>
            <Select id="day_id" name="day" ref={register}>
              <option value="N/A">Ingen preferanse</option>
              <option value="17">Dag 1 (17. september)</option>
              <option value="18">Dag 2 (18. september)</option>
            </Select>
            <Label>Ønsker dere å delta/arrangere noe på karrieredagen?</Label>
            <Ul>
              <li>
                <Label htmlFor="extra_work">
                  <input
                    type="checkbox"
                    id="extra_work"
                    name="workshop"
                    ref={register}
                  />
                  Workshop
                </Label>
              </li>
              <li>
                <Label htmlFor="extra_talk">
                  <input
                    type="checkbox"
                    id="extra_talk"
                    name="talk"
                    ref={register}
                  />
                  Foredrag
                </Label>
              </li>
              <li>
                <Label htmlFor="extra_speed">
                  <input
                    type="checkbox"
                    id="extra_speed"
                    name="lightningtalk"
                    ref={register}
                  />
                  Lynforedrag
                </Label>
              </li>
              <li>
                <Label htmlFor="extra_pres">
                  <input
                    type="checkbox"
                    id="extra_pres"
                    name="presentation"
                    ref={register}
                  />
                  Lynpresentasjon
                </Label>
              </li>
              <li>
                <Label htmlFor="extra_view">
                  <input
                    type="checkbox"
                    id="extra_view"
                    name="interview"
                    ref={register}
                  />
                  Lynintervju
                </Label>
              </li>
            </Ul>

            <Label>
              Ønsker dere å delta på vår bankett?
              {errors.banquet && <Error> {errors.banquet.message}</Error>}
            </Label>
            <Ul>
              <li>
                <Label htmlFor="banquet_yes">
                  <input
                    type="radio"
                    id="banquet_yes"
                    name="banquet"
                    value="yes"
                    ref={register({ required: true })}
                  />
                  Ja
                </Label>
              </li>
              <li>
                <Label htmlFor="banquet_no">
                  <input
                    type="radio"
                    id="banquet_no"
                    name="banquet"
                    value="no"
                    ref={register({ required: true })}
                  />
                  Nei
                </Label>
              </li>
              <li>
                <Label htmlFor="banquet_maybe">
                  <input
                    type="radio"
                    id="banquet_maybe"
                    name="banquet"
                    value="maybe"
                    ref={register({ required: true })}
                  />
                  Usikker/kanskje
                </Label>
              </li>
            </Ul>
          </Fieldset>
        </section>
        <section>
          <h2>Annet</h2>
          <Fieldset>
            <Legend>Diverse</Legend>
            <Label htmlFor="other">Har dere noe annet på hjertet?</Label>
            <TextArea
              id="other"
              name="other"
              rows={4}
              cols={25}
              ref={register}
            />
          </Fieldset>
        </section>
        <section>
          <h2>Til slutt...</h2>
          <Fieldset>
            <Legend>Bekreftelse</Legend>
            <div style={{ paddingBottom: "0.5rem" }}>
              <input
                type="checkbox"
                id="conf_id"
                name="confirmation"
                ref={register({ required: true })}
              />
              <Label htmlFor="conf_id">
                Vi vil med dette melde vår <strong>interesse</strong> for{" "}
                <em>echo karriere</em> 2020.
                {errors.confirmation && <Error> Du må bekrefte</Error>}
              </Label>
            </div>
            <div>
              <input type="submit" value="Meld interesse" />
            </div>
          </Fieldset>
        </section>
      </form>
    </>
  );
}
