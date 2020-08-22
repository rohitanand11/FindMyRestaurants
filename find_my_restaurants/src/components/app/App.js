import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import CardContainer from "../cardContainer/CardContainer";
import classes from "./App.module.scss";

import foodImg from "../../assets/images/food_image1.jpg";
import LogicBox from "../logicBox/LogicsBox";

const data = {
  dataImg: foodImg,
  description: {
    rating: "3 stars",
    location: "bangalore",
  },
};

let data_array = [];
for (let i = 0; i < 100; i++) {
  data_array.push(data);
}

console.log(data_array);

const App = () => {

  const handleKeyDownInput = (e) => {
    console.log("called");
    console.log(e);
    if(e.key === 'Enter'){
      console.log(e.target.value);
    }
  }

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main className={classes.Main}>
          <LogicBox inputSearch={handleKeyDownInput}/>
          <CardContainer data = {data_array} />
      </main>

      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default App;
