import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Legend = styled.legend`
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
`;

const Input = styled.input`
  margin: 0.5rem;
`;

const Label = styled.label`
  padding: 0 0.5rem;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Error = styled.span`
  font-size: 12px;
  color: red;
`;

const Ul = styled.ul`
  list-style: none;
  float: left;
  margin: 0;

  > li input {
    margin-right: 0.5rem;
  }
`;

const Select = styled.select`
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  margin: 0.5rem;
`;

type FormData = {
  company: string;
  person: string;
  email: string;
  phone: number;
  day: "none" | "day1" | "day2";
  banquet: "yes" | "no";
  confirmation: boolean;
};

yup.setLocale({
  mixed: {
    required: "Du må fylle ut dette feltet",
    oneOf: "Du må velge et alternativ",
    notType: "Feltet må være et gyldig nummer"
  },
  string: {
    email: "Feltet må være en gyldig epost-adresse"
  },
  number: {
    integer: "Feltet må være et gyldig nummer"
  }
});

const interestSchema = yup.object().shape({
  company: yup.string().required(),
  person: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  phone: yup
    .number()
    .integer()
    .required(),
  day: yup
    .mixed()
    .oneOf(["none", "day1", "day2"])
    .required(),
  extra: yup
    .mixed()
    .oneOf(["workshop", "talk", "lightningtalk", "presentation", "interview"])
    .notRequired(),
  banquet: yup
    .mixed()
    .oneOf(["yes", "no", "maybe"])
    .notRequired(),
  other: yup.string().notRequired(),
  confirmation: yup
    .mixed()
    .oneOf(["confirmation"])
    .required()
});

export default function InterestForm() {
  const { register, handleSubmit, errors } = useForm<FormData>({
    validationSchema: interestSchema
  });
  const onSubmit = data => console.log(data);

  return (
    <>
      <h1>Interesseskjema 2020</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <option value="none">Ingen preferanse</option>
              <option value="day1">Dag 1 (17. september)</option>
              <option value="day2">Dag 2 (18. september)</option>
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
                id="confirmation"
                name="confirmation"
                ref={register({ required: true })}
              />
              <Label htmlFor="confirmation">
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
