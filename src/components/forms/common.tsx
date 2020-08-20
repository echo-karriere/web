import styled from "styled-components";

export const CenteredContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

export const Legend = styled.legend`
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
`;

export const Input = styled.input`
  margin: 0.5rem;
`;

export const Label = styled.label`
  padding: 0 0.5rem;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
`;

export const Ul = styled.ul`
  float: left;
  list-style: none;
  margin: 0;

  > li input {
    margin-right: 0.5rem;
  }
`;

export const Select = styled.select`
  margin-bottom: 1rem;
`;

export const TextArea = styled.textarea`
  margin: 0.5rem;
`;
