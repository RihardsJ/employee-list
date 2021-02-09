const deleteRecord = (list, employee) =>
  list.filter((record) => record !== employee);

export default deleteRecord;
