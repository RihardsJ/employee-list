import React, { useState, useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { EmployeeContext } from "../Utils/Context";
import { Label, FieldSet, Legend, Input } from "./Form-Elements";

const Form = styled.form``;

const InputLabel = styled(Label)``;

const OpenFormButton = styled(Button)``;

const SubmitButton = styled(Button)``;

const InputField = () => {
  const { employees } = useContext(EmployeeContext);

  const nameValidation = "[a-zA-Z ]+";
  const emailValidation = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$";

  return (
    <Form position="open" id="inputForm">
      <OpenFormButton type="button">close</OpenFormButton>
      <FieldSet>
        <Legend>New Employee</Legend>
        <InputLabel htmlFor="input-name">Name:</InputLabel>
        <Input
          type="text"
          id="input-name"
          autoComplete="false"
          pattern={nameValidation}
          required
        />
        <InputLabel htmlFor="input-email">Email:</InputLabel>
        <Input
          type="text"
          id="input-email"
          pattern={emailValidation}
          autoComplete="false"
        />
        <SubmitButton type="submit">Add</SubmitButton>
      </FieldSet>
    </Form>
  );
};

export default InputField;
