import React from 'react';
import Classes from './Card.module.scss';

const Card = (props) => {

    const {CardData} = props;
    
    return (
        <div className={Classes.Card}>
            <div className={Classes.ImageContainer}>
            {/* for the resturant image */}
                <img src={CardData.dataImg} alt=""/> 
            </div>

            {/* description */}
            <div className={Classes.descrption}>
                <div className={Classes.heading}>Heading</div>
                <div>hey</div>
                <div>hello</div>
                <div>heya</div>
            </div>
        </div>
    )
}

export default Card;