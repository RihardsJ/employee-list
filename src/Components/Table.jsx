import styled from "styled-components";
import { useContext } from "react";
import { EmployeeContext } from "../Utils/Context";
import deleteRecord from "../Utils/DeleteRecord";
import { ReactComponent as EditSVG } from "../Images/edit-icon.svg";
import { ReactComponent as DeleteSVG } from "../Images/delete-icon.svg";
import { ReactComponent as ProfileSVG } from "../Images/profile-icon.svg";
import device from "../Utils/Device-Size";

const Table = styled.table`
  width: 80%;
  margin: 1rem auto;
  padding: 24px;
  box-shadow: 1px 1px 2px hsla(0, 0%, 0%, 0.4);
  border-bottom: 1px solid var(--grey);
  border-collapse: collapse;
`;

const THead = styled.thead`
  color: var(--white);
  background-color: var(--green);
  text-transform: capitalize;
  font-family: var(--title-font);
  display: none;

  @media ${device.samllLaptop} {
    display: table-header-group;
  }
`;

const TBody = styled.tbody`
  text-align: left;

  @media ${device.samllLaptop} {
    text-align: center;
  }
`;

const TH = styled.th``;

const TD = styled.td`
  color: ${(props) => (props.colour ? `var(--${props.colour})` : "")};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.size};
  grid-area: ${(props) => props["gridposition"]};
`;

const TR = styled.tr`
  display: grid;
  padding: 1rem;
  grid-template: 1fr 1fr 1fr / 85% 15%;
  border-bottom: 1px solid var(--grey);

  @media ${device.samllLaptop} {
    display: table-row;
    font-size: 1.2rem;
  }
`;

const EditIcon = styled(EditSVG)`
  cursor: pointer;
  width: 15px;
  height: auto;
`;
const DeleteIcon = styled(DeleteSVG)`
  cursor: pointer;
  width: 15px;
  height: auto;
`;

const Button = styled.button`
  padding: 0;
  border-style: none;
  background-color: transparent;
  &:focus {
    outline: dashed var(--red);
  }
`;

const ProfileIcon = styled(ProfileSVG)`
  width: 15px;
  margin-right: 1ch;
  height: auto;
`;

const Head = () => {
  const DisplayTitles = () => {
    const titles = ["", "name", "email", ""].map((title, i) => (
      <TH key={i}>{title}</TH>
    ));
    return titles;
  };

  return (
    <THead>
      <TR>{DisplayTitles()}</TR>
    </THead>
  );
};

const Body = () => {
  const { data, editForm } = useContext(EmployeeContext);

  const displayTableRows = ({ employees, setEmployees }) => {
    const rows = [];

    const updateRecords = (employee, setDisplayStatus, setEmployeeIndex) => {
      const recordIndex = data.employees.indexOf(employee);
      setDisplayStatus("flex");
      document.body.style.overflow = "hidden";
      setEmployeeIndex(recordIndex);
    };

    employees.forEach((employee, i) => {
      rows.push(
        <TR key={i}>
          <TD>
            <ProfileIcon gridposition="1 / 1" />
          </TD>
          <TD
            gridposition="2 / 1"
            colour="green"
            fontWeight="700"
            size="1.1rem"
          >
            {employee.name}
          </TD>
          <TD gridposition="3 / 1" fontWeight="400" size="1rem">
            {employee.email}
          </TD>
          <TD gridposition="1 / 2">
            <Button
              aria-label={`update-${employee.name.split(" ").join("-")}`}
              onClick={() =>
                updateRecords(
                  employee,
                  editForm.setDisplayStatus,
                  data.setEmployeeIndex
                )
              }
            >
              <EditIcon />
            </Button>
            <Button
              aria-label={`delete-${employee.name.split(" ").join("-")}`}
              onClick={() => setEmployees(deleteRecord(employees, employee))}
            >
              <DeleteIcon />
            </Button>
          </TD>
        </TR>
      );
    });

    return rows;
  };

  return <TBody>{displayTableRows(data)}</TBody>;
};

const TableField = () => {
  return (
    <Table>
      <Head />
      <Body />
    </Table>
  );
};

export default TableField;
