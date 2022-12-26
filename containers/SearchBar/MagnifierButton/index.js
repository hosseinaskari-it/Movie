import SearchIcon from 'public/assets/svgs/icons/search.svg';
import styled from "styled-components";

const Button = styled.button`
  line-height: 0;
  pointer-events: ${(props) => (props.opened ? "auto" : "none")};
  cursor: ${(props) => (props.opened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.palettesecondarycontrasttext};

  @media ${({ theme }) => theme.mediaQueries.large} {
    font-size: 1rem;
  } ;
`;

const MagnifierButton = ({ opened }) => (
  <>
    <Button opened={opened}>
      <SearchIcon fill="currentColor" width="1.125em" />
    </Button>
  </>
);

export default MagnifierButton;
