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
  Error
} from "./common";

type FormData = {
  name: string;
  email: string;
  message: string;
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
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  message: yup.string().required()
});

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const { register, errors, handleSubmit } = useForm<FormData>({
    validationSchema: interestSchema
  });
  const submitForm = (data: FormData) => {
    axios
      .post("https://formcarry.com/s/i4fH6eGjGEzY", data, {
        headers: { Accept: "application/json" }
      })
      .then(res => {
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
      <h2>Kontakt oss</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <section>
          <Fieldset>
            <Legend>Kontakt</Legend>
            <Label htmlFor="name_id">
              Navn
              {errors.name && <Error> {errors.name.message}</Error>}
            </Label>
            <Input
              type="text"
              name="name"
              id="name_id"
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

            <Label htmlFor="message">
              Melding
              {errors.message && <Error> {errors.message.message}</Error>}
            </Label>
            <TextArea
              id="message"
              name="message"
              rows={4}
              cols={25}
              ref={register}
            />
            <div>
              <input type="submit" value="Send melding" />
            </div>
          </Fieldset>
        </section>
      </form>
    </>
  );
}
