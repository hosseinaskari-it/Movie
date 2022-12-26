import { useState, useEffect } from "react";
import GradientImageWrapper from "parts/GradientImageWrapper";
import styled from "styled-components";

const Picture = styled.img`
  object-fit: ${(props) => (props.error ? "auto" : "none")};
`;

const Image = ({
  style,
  loadingUI,
  placeholderPath,
  gradientOverlayEnabled,
  fetchpriority,
  alt,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    return () => setLoaded(false);
  }, []);

  const onImageLoadHandler = () => {
    setLoaded(true);
  };

  return (
    <>
      {/* TODO: it heavily depends on JS -> would be better to go with HTML and CSS */}
      {!loaded && loadingUI}
      <GradientImageWrapper overlayEnabled={gradientOverlayEnabled}>
        <Picture
          error= {error}
          onLoad={onImageLoadHandler}
          fetchpriority={fetchpriority}
          onError={(event) => {
            setError(true);
            if (event.target.src !== placeholderPath) {
              event.target.src = placeholderPath;
            }
          }}
          style={{
            ...style,
            display: loaded ? "block" : "none",
          }}
          alt={alt ?? ""}
          {...rest}
        />
      </GradientImageWrapper>
    </>
  );
};

export default Image;
