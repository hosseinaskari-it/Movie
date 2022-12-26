import Link from "next/link";
import LINKS from "utils/constants/link";
import { LOGO_IMAGE_PATH } from "utils/constants/image-paths";
import QUERY_PARAMS from "utils/constants/query-params";
import STATIC_MOVIE_CATEGORIES from "utils/constants/static-movie-categories";
import styled from "styled-components";

const HyperLink = styled.a`
  width: 100%;
  height: 18rem;
  display: grid;
  place-items: center;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  max-width: 75%;  
`;
const Logo = () => (
  <>
    <Link
      href={{
        pathname: LINKS.HOME.HREF,
        query: {
          [QUERY_PARAMS.CATEGORY]: STATIC_MOVIE_CATEGORIES[0].name,
          [QUERY_PARAMS.PAGE]: 1,
        },
      }}
    >
      <HyperLink>
        <picture>
          <source srcSet={LOGO_IMAGE_PATH} media="(min-width: 80em)" />
          <Image width="150" height="150" src="" alt="movie ticket" />
        </picture>
      </HyperLink>
    </Link>
  </>
);

export default Logo;
