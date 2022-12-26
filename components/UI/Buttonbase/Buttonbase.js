import styled from "styled-components";

const Buttonbase = styled.button`
  color: ${({ theme }) => theme.palettesecondarymain};
  position: relative;
  cursor: pointer;
  padding: 12px;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export { Buttonbase };
