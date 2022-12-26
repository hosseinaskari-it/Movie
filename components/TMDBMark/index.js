import {
  DARK_TMDB_IMAGE_PATH,
  LIGHT_TMDB_IMAGE_PATH,
} from "utils/constants/image-paths";
import styled from "styled-components";

const Picture = styled.picture`
  display: flex;
  justify-content: center;
  margin: 16px 8px;
`;

const Image = styled.img`
  max-width: 100%;
  height: 3rem;
`;

const TMDBMark = () => (
  <>
    {/* MEMO: inspired by https://web.dev/prefers-color-scheme/#art-direction-with-dark-mode */}
    <Picture >
      <source
        srcSet={DARK_TMDB_IMAGE_PATH}
        media="(prefers-color-scheme: dark)"
      />
      <source
        srcSet={LIGHT_TMDB_IMAGE_PATH}
        media="(prefers-color-scheme: light)"
      />
      <Image width="300" height="118" alt="The Movie Database" src="" />
    </Picture>
  </>
);

export default TMDBMark;
