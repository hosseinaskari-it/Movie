import { useState } from "react";
import BurgerHeader from "./BurgerHeader";
import BurgerMenu from "./BurgerMenu";

const AppHeader = () => {
  const [opened, setOpened] = useState(false);

  const openMenuHandler = () => {
    setOpened(true);
  };

  const closeMenuHandler = () => {
    setOpened(false);
  };

  return (
    <div>
      <BurgerHeader openMenu={openMenuHandler} />
      <BurgerMenu opened={opened} closeMenu={closeMenuHandler} />
    </div>
  );
};

export default AppHeader;
