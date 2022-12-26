import ReactStars from "components/UI/ReactStars";
import RatingValue from "./RatingValue";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const RatingValueMain = styled(RatingValue)`
  margin: 0 8px;
  color: ${({ theme }) => theme.palettewarningmain};
`;

const Rating = ({ voteAverage, withValue }) => (
  <>
    <Container>
      <ReactStars edit={false} size={24} value={voteAverage / 2.0} />
      {withValue && <RatingValueMain value={voteAverage} />}
    </Container>
  </>
);

export default Rating;
