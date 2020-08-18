import React from 'react';
import Classes from './Card.module.scss';

const Card = (props) => {
    return (
        <div className={Classes.Card}>
            <div className={Classes.ImageContainer}>
            {/* for the resturant image */}
                <img/> 
            </div>

            {/* description */}
            <div className={Classes.descrption}>
                <span className={Classes.heading}>Heading</span>
                <span>hey</span>
                <span>hello</span>
                <span>heya</span>
            </div>
        </div>
    )
}

export default Card;