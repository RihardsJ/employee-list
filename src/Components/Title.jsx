import styled from "styled-components";

const H1 = styled.h1`
  font-size: 2.5rem;
  font-family: var(--title-font);
  font-weight: 700;
  color: var(--green);
  text-transform: uppercase;
`;

const Title = ({ children }) => <H1>{children}</H1>;

export default Title;
