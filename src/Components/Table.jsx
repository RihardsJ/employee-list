import styled from "styled-components";
import { useContext } from "react";
import { EmployeeContext } from "../Utils/Context";
import { ReactComponent as EditSVG } from "../Images/edit-icon.svg";
import { ReactComponent as DeleteSVG } from "../Images/delete-icon.svg";
import { ReactComponent as ProfileSVG } from "../Images/profile-icon.svg";

const Table = styled.table``;

const THead = styled.thead``;

const TBody = styled.tbody``;

const TH = styled.th``;

const TD = styled.td``;

const TR = styled.tr``;

const EditIcon = styled(EditSVG)``;
const DeleteIcon = styled(DeleteSVG)``;

const Button = styled.button``;

const ProfileIcon = styled(ProfileSVG)``;

const Head = () => {
  const DisplayTitles = () => {
    const titles = ["name", "email"].map((title, i) => (
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
  const { data } = useContext(EmployeeContext);

  const displayTableRows = ({ employees, setEmployees }) => {
    const rows = [];

    employees.forEach((employee, i) => {
      rows.push(
        <TR key={i}>
          <TD>
            <ProfileIcon />
          </TD>
          <TD>{employee.name}</TD>
          <TD>{employee.email}</TD>
          <TD>
            <Button>
              <EditIcon />
            </Button>
            <Button>
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
