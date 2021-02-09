import styled from "styled-components";
import { useContext } from "react";
import { EmployeeContext } from "../Utils/Context";

const Table = styled.table``;

const THead = styled.thead``;

const TBody = styled.tbody``;

const TH = styled.th``;

const TD = styled.td``;

const TR = styled.tr``;

const Head = () => {
  return (
    <THead>
      <TR>
        <TH>Name</TH>
        <TH>Email</TH>
      </TR>
    </THead>
  );
};

const Body = () => {
  return (
    <TBody>
      <TR>
        <TD></TD>
      </TR>
    </TBody>
  );
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
