import React, { Component } from "react";
import styled from "styled-components";

const StyledCounter = styled.div`
  padding: 64px 0;
  text-align: center;
`;

const Paragraph = styled.p`
  text-align: center;
  padding: 12px 0;
`;

class LazyLoadingErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(
      "[LazyLoadingErrorBoundary getDerivedStateFromError] error => ",
      error
    );
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledCounter>
          <button onClick={() => window.location.reload()}>
            Click to Reload
          </button>
          <Paragraph>Lazy-loading failed!</Paragraph>
        </StyledCounter>
      );
    }

    return this.props.children;
  }
}

export default LazyLoadingErrorBoundary;
