import styled from "styled-components";

const Heading = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  color: ${({ theme }) => theme.palettetextsecondary};
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const PosterTitle = ({ children, ...rest }) => (
  <>
    <Heading {...rest}>{children}</Heading>
  </>
);

export default PosterTitle;
