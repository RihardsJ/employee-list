import Title from "./Components/Title";
import Table from "./Components/Table";
import Input from "./Components/Input";
import Edit from "./Components/Edit";
import SortEmployeeNames from "./Components/Sort-Select";
import React, { useEffect, useState } from "react";
import getEmployeeData from "./Utils/getEmployeeData";
import { EmployeeContext } from "./Utils/Context";

const App = () => {
  const defaultValues = [
    {
      name: "",
      email: "",
    },
  ];

  const [employees, setEmployees] = useState(defaultValues);
  const [employeeIndex, setEmployeeIndex] = useState("0");
  const [displayStatus, setDisplayStatus] = useState("none");

  const globalStates = {
    data: { employees, setEmployees, employeeIndex, setEmployeeIndex },
    editForm: { displayStatus, setDisplayStatus },
  };

  useEffect(() => {
    getEmployeeData(setEmployees);
  }, []);

  return (
    <EmployeeContext.Provider value={globalStates}>
      <Title>Employee List</Title>
      <SortEmployeeNames />
      <Table />
      <Input />
      <Edit />
    </EmployeeContext.Provider>
  );
};

export default App;
