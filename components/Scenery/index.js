import Image from "components/Image";
import ImageLoadingPlaceholder from "components/ImageLoadingPlaceholder";
import AspectRatioBox from "components/UI/AspectRatioBox";
import { NOTHING_PLACEHOLDER_IMAGE_PATH } from "utils/constants/image-paths";
import styled from "styled-components";

const Container = styled(AspectRatioBox)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ImageMain = styled(Image)`
  width: 100%;
  height: 100%;
`;
const Scenery = ({
  overlayClass,

  width,
  height,
  fetchpriority,
  ...rest
}) => (
  <Container aspectRatio={width / height}>
    <ImageMain
      width={width}
      height={height}
      fetchpriority={fetchpriority}
      gradientOverlayEnabled
      overlayClass={overlayClass}
      loadingUI={<ImageLoadingPlaceholder />}
      placeholderPath={NOTHING_PLACEHOLDER_IMAGE_PATH}
      alt="A poster"
      {...rest}
    />
  </Container>
);

export default Scenery;
