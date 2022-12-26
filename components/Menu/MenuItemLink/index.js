import Link from "next/link";
import styled from "styled-components";

const HyperLink = styled.a`
  outline: none;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  line-height: 1;
  color: ${({ theme }) => theme.paletteprimarymain};

  &:hover {
    text-decoration: underline;
  }
`;

const MenuItemLink = React.forwardRef(
  ({ href, as, children, selected, ...rest }, ref) => (
    <>
      <Link href={href} as={as} passHref>
        <HyperLink ref={ref} {...rest}>
          {children}
        </HyperLink>
      </Link>
    </>
  )
);

export default MenuItemLink;
