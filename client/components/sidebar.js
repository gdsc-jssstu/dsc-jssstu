import React from "react";
import { stack as Menu } from "react-burger-menu";

export default function Sidebar(props) {
  return (
    <Menu
      {...props}
      right
      customBurgerIcon={<img src="/images/sidemenu.jpg" />}
    >
      <a className="menu-item" href="/team">
        2020
      </a>

      <a className="menu-item" href="/team2019">
        2019
      </a>
    </Menu>
  );
}
