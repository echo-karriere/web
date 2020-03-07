import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

type FormData = {
  company: string;
  person: string;
  email: string;
  phone: number;
  day: "none" | "day1" | "day2";
  banquet: "yes" | "no";
};

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

export default function InterestForm() {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = data => console.log(data);

  return (
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
            ref={register({ required: "Påkrev felt" })}
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
            ref={register({ required: "Påkrev felt" })}
          />

          <Label htmlFor="email_id">
            Epost
            {errors.email && <Error> {errors.email.message}</Error>}
          </Label>
          <Input
            type="email"
            name="email"
            id="email_id"
            ref={register({ required: "Påkrev felt" })}
          />

          <Label htmlFor="num_id">
            Telefonnummer
            {errors.phone && <Error> {errors.phone.message}</Error>}
          </Label>
          <Input
            type="tel"
            name="phone"
            id="num_id"
            ref={register({ required: "Påkrev felt" })}
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
            <option value="day1">Dag 1</option>
            <option value="day2">Dag 2</option>
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
          </Ul>
        </Fieldset>
      </section>
      <section>
        <h2>Annet</h2>
        <Fieldset>
          <Legend>Diverse</Legend>
          <Label htmlFor="other">Har du noe annet på hjertet?</Label>
          <TextArea id="other" name="other" rows={4} cols={25} ref={register} />
        </Fieldset>
      </section>
      <input type="submit" value="Meld interesse" />
    </form>
  );
}
