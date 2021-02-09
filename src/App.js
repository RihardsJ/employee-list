import Input from "./Components/Input";
import React, { useEffect, useState } from "react";
import { EmployeeContext } from "./Utils/Context";

const App = () => {
  const defaultValues = [
    {
      name: "",
      email: "",
    },
  ];

  const [employees, setEmployees] = useState(defaultValues);

  return (
    <EmployeeContext.Provider value={employees}>
      <Input />
    </EmployeeContext.Provider>
  );
};

export default App;
