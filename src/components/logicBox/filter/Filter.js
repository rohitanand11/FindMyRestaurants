import React from 'react';
import Classes from './Filter.module.scss';

const Filter = (props) => {

    // const [filterbasis,setFilterCriteria]=useState(null);

    const handleFilterCriteria = (ev) => {
        console.log(ev.target);
        console.log(ev.target.innerText);
    }
    return(
        <div className={Classes.Filter}>
            <span>Sort By:</span>
            <button className={Classes.FilterButtons} onClick={handleFilterCriteria}>ratings</button>
            <button className={Classes.FilterButtons} onClick={handleFilterCriteria}>₹(low to high)</button>
            <button className={Classes.FilterButtons} onClick={handleFilterCriteria}>₹(high to low)</button>
        </div>
    );
}

export default Filter;