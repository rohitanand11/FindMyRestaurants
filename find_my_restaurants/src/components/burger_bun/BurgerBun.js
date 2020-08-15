import React from "react";
import Classes from "./BurgerBun.module.scss";

const BurgerBun = (props) => {
  const { orientation } = props; //orientation can be straight or inverted.
  const listClass = `Classes.${orientation}`;

  return (
    <div className={listClass}>
      <div className={Classes.seeds}></div>
    </div>
  );
};

export default BurgerBun;
