import React from "react";
import {randomImage} from "../../utility/Utility";
import Classes from "./Card.module.scss";

const Card = (props) => {
  const { CardData } = props;
  const getImageSource = (pSrc) => {
    if (pSrc === "") {
      return randomImage();
    } else {
      return pSrc;
    }
  };

  return (
    <div className={Classes.Card}>
      <div className={Classes.ImageContainer}>
        <img
          src={getImageSource(CardData.restaurant.thumb)}
          alt="food thumbnail displayed"
        />
      </div>
      <div className={Classes.descrption}>
        <table>
          <thead>
            <tr>
              <th className={Classes.restaurantHeading}>
                {CardData.restaurant.name}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={Classes.description_headers}>Rating</td>
              <td className={Classes.description_data}>
                {CardData.restaurant.user_rating.aggregate_rating.toString()}
              </td>
            </tr>
            <tr>
              <td className={Classes.description_headers}>Cost of two</td>
              <td className={Classes.description_data}>
                {CardData.restaurant.average_cost_for_two}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
