import Input from "./Components/Input";
import Title from "./Components/Title";
import SortEmployeeNames from "./Components/Sort-Select";
import React, { useEffect, useState } from "react";
import { EmployeeContext } from "./Utils/Context";
import getEmployeeData from "./Utils/getEmployeeData";

const App = () => {
  const defaultValues = [
    {
      name: "",
      email: "",
    },
  ];

  const [employees, setEmployees] = useState(defaultValues);

  useEffect(() => {
    getEmployeeData(setEmployees);
  }, []);

  return (
    <EmployeeContext.Provider value={employees}>
      <Title>Employee List</Title>
      <SortEmployeeNames />
      <Input />
    </EmployeeContext.Provider>
  );
};

export default App;
