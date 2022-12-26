import styled from "styled-components";

const InputSearch = styled.input`
  font-size: 1.5rem;
  line-height: 1;
  font-weight: ${({ theme }) => theme.typography.fontweightLight};
  background-color: transparent;
  width: 100%;
  margin-left: ${(props) => (props.opened ? "1rem" : "0rem")};
  color:${({ theme }) => theme.palettesecondarycontrasttext};
  border: none;
  transition: width ${({ theme }) => theme.transitions.duration.standard}ms
  ${({ theme }) => theme.transitions.easing.easingout};

  @media ${({ theme }) => theme.mediaQueries.large} {
    font-size: 1.25rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 1rem;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: 0.875rem;
  }
  &:focus,
  &:active {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.palettesecondarycontrasttext};
  }
`;

const Input = React.forwardRef(({ opened, children, ...rest }, ref) => (
  <>
    <InputSearch opened={opened} ref={ref} {...rest} />
  </>
));

export default Input;
