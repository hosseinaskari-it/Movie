import LazyLoad from "react-lazyload";
import PosterLink from "components/PosterLink";
import Scenery from "components/Scenery";
import DetailsPanelWrapper from "components/DetailsPanelWrapper";
import PosterTitle from "components/PosterTitle";
import RatingInfo from "./RatingInfo";
import LINKS from "utils/constants/link";
import { W342H513 } from "config/image-sizes";
import QUERY_PARAMS from "utils/constants/query-params";

const MovieListItem = ({ movie, baseUrl, fetchpriority }) => (
  <>
    <LazyLoad height={200} offset={1400}>
      <PosterLink
        href={{
          pathname: LINKS.MOVIE.HREF,
          query: {
            [QUERY_PARAMS.ID]: movie.id,
            [QUERY_PARAMS.PAGE]: 1,
          },
        }}
      >
        <Scenery
          width={W342H513.WIDTH}
          height={W342H513.HEIGHT}
          fetchpriority={fetchpriority}
          src={`${baseUrl}w${W342H513.WIDTH}${movie.poster_path}`}
        />
        <DetailsPanelWrapper>
          <PosterTitle>{movie.title}</PosterTitle>
          <RatingInfo
            voteAverage={movie.vote_average}
            tooltip={`${movie.vote_average} average rating on ${movie.vote_count} votes`}
          />
        </DetailsPanelWrapper>
      </PosterLink>
    </LazyLoad>
  </>
);

export default MovieListItem;
