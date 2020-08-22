import React from "react";
import BurgerBun from "../burger_bun/BurgerBun";
import classes from "./Header.module.scss";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <BurgerBun orientation="erect" />
    </div>
  );
};

export default Header;
