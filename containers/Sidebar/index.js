import SidebarInnerWrapper from "./SidebarInnerWrapper";
// import LazyMenu from 'parts/LazyMenu';
import StickyBox from "utils/hocs/StickyBox";
import LazyMenu from "parts/LazyMenu";

const Sidebar = ({ className }) => (
  <StickyBox className={className}>
    <SidebarInnerWrapper>
      <LazyMenu />
    </SidebarInnerWrapper>
  </StickyBox>
);

export default Sidebar;
