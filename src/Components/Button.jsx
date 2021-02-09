import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  color: ${(props) => `var(--${props.colour})`};
  background-color: ${(props) => `var(--${props.bgColour})`};
  font-size: 1em;
  height: 2rem;
  max-width: 360px;
  padding: 0.25em 1em;
  border-radius: 15px;
  border-style: none;
  box-shadow: 1px 1px 1px hsla(0, 0%, 0%, 0.25),
    -1px -1px 1px hsla(0, 100%, 100%, 0.25);
  &:focus {
    outline: dashed var(--red);
  }
`;

export default Button;
