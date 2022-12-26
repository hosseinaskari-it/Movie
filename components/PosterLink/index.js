import Link from "next/link";
import styled from "styled-components";

const HyperLink = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform ${({ theme }) => theme.transitions.duration.shortest}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};

  &:hover {
    transform: scale(1.03);
  }

  &:hover::after {
    transform: scaleY(1);
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: top;
    background-color: ${({ theme }) => theme.palettebackgroundpaper};
    box-shadow: ${({ theme }) => theme.shadows[1]};
  }
`;

const PosterLink = React.forwardRef(({ href, as, children, ...rest }, ref) => (
  <>
    <Link passHref as={as} href={href}>
      <HyperLink ref={ref} {...rest}>
        {children}
      </HyperLink>
    </Link>
  </>
));

export default PosterLink;
