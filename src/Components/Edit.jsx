import Button from "./Button";
import { Legend, Label, Input } from "./Form-Elements";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { EmployeeContext } from "../Utils/Context";
import updateRecord from "../Utils/UpdateRecord";

const Form = styled.form`
  top: 0;
  position: fixed;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  display: ${(props) => props.display};
  z-index: 7;
`;

const InputLabel = styled(Label)``;

const CenteredFieldset = styled.fieldset`
  height: 230px;
  margin-top: 20vh;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-style: none;
  border-radius: 21px;
`;

const Title = styled(Legend)`
  padding-top: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  margin: auto;
`;

const CloseButton = styled(Button)`
  margin-top: 1rem;
`;

const EditField = () => {
  const { data } = useContext(EmployeeContext);

  const nameValidation = "[a-zA-Z ]+";
  const emailValidation = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$";

  const currentEmployee = data.employees[data.employeeIndex] || "";

  const [newRecord, setNewrecord] = useState(currentEmployee);

  useEffect(() => {
    setNewrecord(currentEmployee);
  }, [currentEmployee]);

  const closeForm = (event) => {
    event.preventDefault();
  };

  const handleChange = (key) => ({ target: { value } }) =>
    setNewrecord((prevData) => ({ ...prevData, [key]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    data.setEmployees(
      updateRecord(data.employees, data.employeeIndex, newRecord)
    );
    document.body.style.overflow = "scroll";
  };

  return (
    <Form display="block" onSubmit={handleSubmit}>
      <CloseButton
        type="button"
        bgColour="grey"
        colour="black"
        onClick={closeForm}
      >
        Close
      </CloseButton>
      <CenteredFieldset>
        <Title>{currentEmployee.name}</Title>
        <InputLabel htmlFor="edit-name">Name:</InputLabel>
        <Input
          type="text"
          id="edit-name"
          autoComplete="false"
          pattern={nameValidation}
          autoCapitalize="word"
          value={newRecord.name}
          onChange={handleChange("name")}
          required
        />
        <InputLabel htmlFor="edit-email">Email:</InputLabel>
        <Input
          type="text"
          id="edit-email"
          autoComplete="false"
          pattern={emailValidation}
          value={newRecord.email}
          onChange={handleChange("email")}
        />
        <Button type="submit">Update</Button>
      </CenteredFieldset>
    </Form>
  );
};

export default EditField;
