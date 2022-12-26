import styled from "styled-components";

const FormSearch = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  background-color: ${({ theme }) => theme.palettesecondarydark};
  border: 1px solid ${({ theme }) => theme.palettesecondarymain};
  width: ${(props) => (props.opened ? "30rem" : "2rem")};
  cursor: ${(props) => (props.opened ? "auto" : "pointer")};
  padding: 2rem;
  height: 2rem;
  outline: none;
  border-radius: 100px;
  transition: width ${({ theme }) => theme.transitions.duration.standard}ms
    ${({ theme }) => theme.transitions.easing.easingout};

  @media ${({ theme }) => theme.mediaQueries.large} {
    padding: 1.5rem;
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme.palettesecondarymain};
  }

  @media ${({ theme }) => theme.mediaQueries.smaller} {
    max-width: 16rem;
  }
`;

const Form = React.forwardRef(({ opened, children, ...rest }, ref) => (
  <>
    <FormSearch opened={opened} ref={ref} {...rest}>
      {children}
    </FormSearch>
  </>
));

export default Form;
