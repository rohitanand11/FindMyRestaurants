import React from 'react';
import Card from "../card/Card";

import Classes from './CardContainer.module.scss';

const CardContainer = (props) => {

    const {data} = props;
    console.log(data);

    const renderCards = () => {
        let array_cards = [];
        let i = 0;
        for (let elemobj of data){
            ++i;
            array_cards.push (<Card key={i} CardData={elemobj}/>);
        }
        return array_cards;
    }
    return (
        <div className={Classes.CardContainer}>
            {renderCards()}
        </div>
    )
}

export default CardContainer;