import Link from "next/link";
import ContainerIconButton from "components/IconButtons/ContainerIconButton";
import { useAuth } from "utils/hocs/AuthProvider";
import LINKS from "utils/constants/link";
import QUERY_PARAMS from "utils/constants/query-params";
import styled from "styled-components";
import ExitToAppIcon from "public/assets/svgs/icons/exit-to-app.svg";
import AccountCircleIcon from "public/assets/svgs/icons/account-circle.svg";

const TextButton = styled.button`
  border: 0;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  color: ${({ theme }) => theme.palettetextprimary};
`;

const DropdownMenu = styled.ul`
  position: absolute;
  right: 0;
  min-width: 160px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border: 1px solid ${({ theme }) => theme.palettedivider};
  background-color: ${({ theme }) => theme.palettebackgroundpaper};
  z-index: 1300;
  list-style-type: none;
  visibility: hidden;

  &:nth-child(2) {
    border-bottom: none !important;
  }
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    ${DropdownMenu} {
      visibility: visible;
    }
  }
`;

const DropdownMenuItem = styled.li`
  align-items: center;
  padding: 0 16px;
  font-size: 1.5rem;
  height: 36px;
  background-color: ${({ theme }) => theme.palettebackgroundpaper};
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.palettetextprimary};

  &.border {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.paletteactionhover};
  }

  a {
    color: ${({ theme }) => theme.palettetextprimary};
  }
`;

const TheUser = () => {
  const { login, logout, isPending, isAuthenticated } = useAuth();
  console.log(useAuth());

  return (
    <>
      {isAuthenticated ? (
        <Container>
          <ContainerIconButton >
            <AccountCircleIcon />
          </ContainerIconButton>
          <DropdownMenu>
            <DropdownMenuItem>
              <Link
                href={{
                  pathname: LINKS.ADD_OR_EDIT_LIST.HREF,
                }}
              >
                <a>Create New List</a>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={{
                  pathname: LINKS.MY_LISTS.HREF,
                  query: {
                    [QUERY_PARAMS.PAGE]: 1,
                  },
                }}
              >
                <a>My Lists</a>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="border">
              <TextButton onClick={logout}>Logout</TextButton>
            </DropdownMenuItem>
          </DropdownMenu>
        </Container>
      ) : (
        <ContainerIconButton onClick={login}>
          <ExitToAppIcon />
        </ContainerIconButton>
      )}
    </>
  );
};

export default TheUser;
