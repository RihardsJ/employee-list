const getEmployeeData = async (setState) => {
  const url = "./EmployeeData.json";
  const header = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const response = await fetch(url, header);
  const data = await response.json();
  setState(data);
};

export default getEmployeeData;
