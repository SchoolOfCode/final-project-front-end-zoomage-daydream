import React from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const TypeOfSpace = () => {
  return (
    <Menu menuButton={<MenuButton>Options</MenuButton>} transition>
      <MenuItem>New File</MenuItem>
      <MenuItem>Save</MenuItem>
      <MenuItem>Close Window</MenuItem>
    </Menu>
  );
};

export default TypeOfSpace;
