import React from "react";
import Classes from "./BurgerBun.module.scss";

const BurgerBun = (props) => {
  const { orientation } = props; //orientation can be Erect or inverted.

  return (
    <div
      className={
        orientation === "erect" ? Classes.burgerErect : Classes.burgerInverted
      }
    >
      {/* <div className={Classes.seeds}></div> */}
    </div>
  );
};

export default BurgerBun;
