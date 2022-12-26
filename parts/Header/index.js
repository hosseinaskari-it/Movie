import SIZE_TYPES from "utils/constants/size-types";
import styled from "styled-components";

const Heading1 = styled.h1`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.palettetextprimary};

  font-size: ${(props) =>
    props.size === SIZE_TYPES.LARGE ? "3.75rem" : "3rem"};

  font-weight: ${({ theme }) => theme.typography.fontWeightLight};

  line-height: ${(props) => (props.size === SIZE_TYPES.LARGE ? "1.2" : "1")};

  text-transform: uppercase;
  letter-spacing: -0.5px;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: ${(props) =>
      props.size === SIZE_TYPES.LARGE ? "3rem" : "2.125rem"};
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    font-size: ${(props) =>
      props.size === SIZE_TYPES.LARGE ? "2.125rem" : "1.5rem"};
  }
`;

const Heading2 = styled.h2`
  color: ${({ theme }) => theme.palettetextsecondary};
  font-size: ${(props) =>
    props.size === SIZE_TYPES.LARGE ? "1.5rem" : "1.25rem"};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};

  line-height: ${(props) => (props.size === SIZE_TYPES.LARGE ? "1.5" : "1")};

  text-transform: uppercase;
  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: ${(props) =>
      props.size === SIZE_TYPES.LARGE ? "1.25rem" : "1rem"};
  }
`;
const Container = styled.div`
  margin-bottom: 2rem;
`;
const Title = ({ children, size = SIZE_TYPES.MEDIUM }) => (
  <>
    <Heading1 size={size}>{children}</Heading1>
  </>
);

const Subtitle = ({ size, children }) => (
  <>
    <Heading2>{children}</Heading2>
  </>
);

const Header = ({ title, subtitle, size, ...rest }) => (
  <>
    <Container {...rest}>
      <Title size={size}>{title}</Title>
      <Subtitle size={size}>{subtitle}</Subtitle>
    </Container>
  </>
);

export default Header;
