import styled from "styled-components";

export const CenteredContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 12px;
  color: red;
`;

export const Ul = styled.ul`
  list-style: none;
  float: left;
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
