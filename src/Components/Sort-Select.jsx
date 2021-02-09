import styled from "styled-components";
import { Label } from "./Form-Elements";
import { EmployeeContext } from "../Utils/Context";
import { useContext } from "react";
import ascending from "../Utils/Ascending-Sort";
import descending from "../Utils/Descending-Sort";

const Select = styled.select`
  color: var(--red);
  background-color: var(--white);
  padding: 0.25rem 1rem;
  font-size: 1.1rem;
`;

const SortEmployeeNames = () => {
  const { data } = useContext(EmployeeContext);

  const sortEmployeeList = ({ target }) => {
    const order = target.value;
    const sort = {
      ascending: ascending,
      descending: descending,
    };

    return data.setEmployees(sort[order](data.employees));
  };

  return (
    <form>
      <Label htmlFor="sortOrder">Sort:</Label>
      <Select id="sortOrder" name="sortOrder" onChange={sortEmployeeList}>
        <option value="ascending">{"A - Z"}</option>
        <option value="descending">{"Z - A"}</option>
      </Select>
    </form>
  );
};

export default SortEmployeeNames;
