import React from "react";
import Classes from "./InputBox.module.scss";

const InputBox = (props) => {
  console.log(props.updateLocation);
  return (
    <div className={Classes.InputBox}>
      <input
        className={Classes.searchBox}
        placeholder="Enter location"
        onKeyPress={props.updateLocation}
      />
    </div>
  );
};

export default InputBox;
