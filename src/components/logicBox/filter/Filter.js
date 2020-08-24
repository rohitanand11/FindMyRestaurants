import React from 'react';
import Classes from './Filter.module.scss';

const Filter = (props) => {

    // const [filterbasis,setFilterCriteria]=useState(null);

    // const handleFilterCriteria = (ev) => {
    //     console.log(ev.target);
    //     console.log(ev.target.innerText);
    // }
    return(
        <div className={Classes.Filter}>
            <span>Sort By:</span>
            <button className={Classes.FilterButtons} onClick={props.sortBy}>ratings</button>
            <button className={Classes.FilterButtons} onClick={props.sortBy}>₹(low to high)</button>
            <button className={Classes.FilterButtons} onClick={props.sortBy}>₹(high to low)</button>
        </div>
    );
}

export default Filter;