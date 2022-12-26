import styled from "styled-components";

const Container = styled.h2`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};

  font-size: 1.25rem;
  color: ${({ theme }) => theme.palettetextprimary};

  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin: 0 0 1rem 1rem;

  &:not(:first-child) {
    margin-left: 8px;
  }
`;

const SectionHeading = ({ children }) => (
  <>
    <Container>{children}</Container>
  </>
);

export default SectionHeading;
