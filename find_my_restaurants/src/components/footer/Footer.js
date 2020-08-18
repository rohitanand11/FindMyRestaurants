import React from 'react';
import Classes from './Footer.module.scss';
import BurgerBun from '../burger_bun/BurgerBun';

const Footer = (props) => {
    return(
        <div className={Classes.Footer}>
            <BurgerBun orientation ="inverted"/>
        </div>
    )
}

export default Footer;