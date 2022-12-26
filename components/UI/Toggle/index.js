import React from "react";
import Switch from "react-switch";
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'


const Toggle = ({ themeToggler }) => {
    const title = useContext(ThemeContext);
    const toggle = title.checked;
 
  return (
    <>
      <Switch
        onChange={themeToggler}
        checked={toggle}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offHandleColor="#2693e6"
        onHandleColor="#e63946"
        offColor="#86d3ff"
        onColor="#f2e8cf"
      />
    </>
  );
};

export default Toggle;
