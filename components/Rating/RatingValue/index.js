import styled from "styled-components";

const Para = styled.p`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  line-height: 0;
`;

const RatingValue = ({ value }) => (
  <>
    <Para>{value}</Para>
  </>
);

export default RatingValue;
