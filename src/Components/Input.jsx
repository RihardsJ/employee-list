import React, { useState, useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { EmployeeContext } from "../Utils/Context";
import { Label, FieldSet, Legend, Input } from "./Form-Elements";

const Form = styled.form`
  position: fixed;
  bottom: 0;
  width: 100vw;
  transition: transform 0.9s ease-out;
  transform: ${(props) => (props.position ? "" : "translateY(85%)")};
  z-index: 6;
`;

const InputLabel = styled(Label)``;

const SubmitButton = styled(Button)``;

const OpenFormButton = styled(Button)`
  float: left;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border-radius: 3px;
  font-weight: 700;
  box-shadow: 1px -2px 1px hsl(0, 0%, 0%, 0.5);
  background-color: var(--white);
  color: var(--black);
`;

const InputField = () => {
  const { data } = useContext(EmployeeContext);

  const nameValidation = "[a-zA-Z ]+";
  const emailValidation = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$";

  const [isOpen, setIsOpen] = useState(true);
  const [newEmployee, setNewEmployee] = useState({ name: "", email: "" });

  const openCloseForm = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleChange = (key) => ({ target: { value } }) =>
    setNewEmployee((prevData) => ({ ...prevData, [key]: value }));

  const addNewEmployeeToList = (event) => {
    event.preventDefault();
    data.setEmployees((employeeList) => [...employeeList, newEmployee]);
    setNewEmployee({ name: "", email: "" });
  };

  return (
    <Form position={isOpen} onSubmit={addNewEmployeeToList} id="inputForm">
      <OpenFormButton type="button" onClick={openCloseForm}>
        {isOpen ? "x" : "="}
      </OpenFormButton>
      <FieldSet>
        <Legend>New Employee</Legend>
        <InputLabel htmlFor="input-name">Name:</InputLabel>
        <Input
          type="text"
          id="input-name"
          autoComplete="false"
          pattern={nameValidation}
          autoCapitalize="word"
          required
          value={newEmployee.name}
          onChange={handleChange("name")}
        />
        <InputLabel htmlFor="input-email">Email:</InputLabel>
        <Input
          type="text"
          id="input-email"
          autoComplete="false"
          pattern={emailValidation}
          value={newEmployee.email}
          onChange={handleChange("email")}
        />
        <SubmitButton type="submit">Add</SubmitButton>
      </FieldSet>
    </Form>
  );
};

export default InputField;
