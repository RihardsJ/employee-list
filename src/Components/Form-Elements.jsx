import styled from "styled-components";

const Label = styled.label`
  font-weight: 700;
  margin-right: 1ch;
  color: var(--dark-grey);
`;

const FieldSet = styled.fieldset`
  display: grid;
  grid-template: 50px 50px 50px / 25vw 65vw;
  border-radius: 15px;
  border-width: 1px;
  border-color: var(--green);
  background-color: var(--white);
  margin: auto;
`;

const Legend = styled.legend`
  font-family: var(--title-font);
  color: var(--green);
  font-size: 1.1rem;
`;

const Input = styled.input`
  font-size: 1rem;
  height: 1.5rem;
  font-family: var(--title-font);
  border-radius: 5px;
  border-color: var(--grey);
  border-style: solid;
  border-width: 1px;
  padding-left: 1ch;
  max-width: 360px;
`;

export { Label, Legend, FieldSet, Input };
