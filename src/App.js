import Input from "./Components/Input";
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
      <Input />
    </EmployeeContext.Provider>
  );
};

export default App;
