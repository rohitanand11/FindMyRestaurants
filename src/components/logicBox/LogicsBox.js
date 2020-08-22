import React from 'react';
import InputBox from "./inputBox/InputBox";
import FilterBox from "./filter/Filter";
import Classes from './LogicBox.module.scss';

const LogicBox = (props) => {
    return(
        <div className={Classes.LogicBox}>
            <InputBox updateLocation = {props.inputSearch}/>
            <FilterBox />
        </div>
    );
}

export default LogicBox;