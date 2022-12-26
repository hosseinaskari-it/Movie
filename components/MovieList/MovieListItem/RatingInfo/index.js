import Rating from "components/Rating";
import Tooltip from "components/UI/Tooltip";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const TooltipItem = styled(Tooltip)`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);

  &:hover {
    visibility: visible;
  }
`;

const RatingInfo = ({ voteAverage, tooltip }) => (
  <>
    <Container>
      <Rating voteAverage={voteAverage} />
      <TooltipItem>{tooltip}</TooltipItem>
    </Container>
  </>
);

export default RatingInfo;
