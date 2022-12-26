import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  padding: 2rem;
  margin-top: 4rem;
  border-right: 1px solid ${({ theme }) => theme.palettedivider};;
`;

const SidebarInnerWrapper = ({ children }) => (
  <>
    <Wrapper>{children}</Wrapper>
  </>
);

export default SidebarInnerWrapper;
