import styled from "styled-components";
import Button from "./Button";
import { Label, FieldSet, Legend, Input } from "./Form-Elements";
import { ReactComponent as ProfileIcon } from "../Images/profile-icon.svg";
import { ReactComponent as BurgerIcon } from "../Images/burger-icon.svg";
import { useState, useContext } from "react";
import { EmployeeContext } from "../Utils/Context";
import device from "../Utils/Device-Size";

const Form = styled.form`
  position: fixed;
  bottom: 0;
  width: 100vw;
  transition: transform 0.9s ease-out;
  transform: ${(props) => (props.position ? "" : "translateY(85%)")};
  z-index: 6;

  @media ${device.largeMobile} {
    transform: ${(props) => (props.position ? "" : "translateY(100%)")};
  }
`;

const InputLabel = styled(Label)`
  grid-area: ${(props) => props["gridPosition"]};
`;

const SubmitButton = styled(Button)`
  grid-area: ${(props) => props["gridPosition"]};

  @media ${device.samllLaptop} {
    width: 180px;
  }
`;

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

  @media ${device.largeMobile} {
    transform: translateY(-30px);
  }
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
      <OpenFormButton
        type="button"
        onClick={openCloseForm}
        colour="green"
        position={isOpen}
        aria-label={isOpen ? "input-form-opened" : "input-form-closed"}
      >
        {isOpen ? "x" : <BurgerIcon />}
      </OpenFormButton>
      <FieldSet>
        <Legend>
          <ProfileIcon /> New Employee
        </Legend>
        <InputLabel htmlFor="input-name" gridPosition="1 / 1">
          Name:
        </InputLabel>
        <Input
          type="text"
          id="input-name"
          autoComplete="false"
          pattern={nameValidation}
          gridPosition="1 / 2"
          autoCapitalize="word"
          required
          value={newEmployee.name}
          onChange={handleChange("name")}
        />
        <InputLabel htmlFor="input-email" gridPosition="2 / 1">
          Email:
        </InputLabel>
        <Input
          type="text"
          id="input-email"
          autoComplete="false"
          gridPosition="2 / 2"
          pattern={emailValidation}
          value={newEmployee.email}
          onChange={handleChange("email")}
        />
        <SubmitButton
          type="submit"
          bgColour="red"
          colour="white"
          gridPosition="3 / 2 "
        >
          Add
        </SubmitButton>
      </FieldSet>
    </Form>
  );
};

export default InputField;
