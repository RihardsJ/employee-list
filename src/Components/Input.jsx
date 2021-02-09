import React, { useState, useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { EmployeeContext } from "../Utils/Context";

const Form = styled.form``;

const FieldSet = styled.fieldset``;

const Legend = styled.legend``;

const InputLabel = styled.label``;

const Input = styled.input``;

const OpenFormButton = styled(Button)``;

const SubmitButton = styled(Button)``;

const InputField = () => {
  const { employees } = useContext(EmployeeContext);

  return (
    <Form position="open" id="inputForm">
      <OpenFormButton type="button">close</OpenFormButton>
      <FieldSet>
        <Legend>New Employee</Legend>
        <InputLabel htmlFor="input-name">Name:</InputLabel>
        <Input type="text" id="input-name" autoComplete="false" required />
        <InputLabel htmlFor="input-email">Email:</InputLabel>
        <Input type="text" id="input-email" autoComplete="false" />
        <SubmitButton type="submit">Add</SubmitButton>
      </FieldSet>
    </Form>
  );
};

export default InputField;
