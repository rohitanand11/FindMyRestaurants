import React, { useEffect } from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import CardContainer from "../cardContainer/CardContainer";
import LogicBox from "../logicBox/LogicsBox";
import useResults from "../../hooks/useResults";
import classes from "./App.module.scss";
import * as utility from "../../utility/Utility";

const App = () => {
  const [
    searchAccToDeviceLocation,
    searchApi,
    isCity,
    handleSetResult,
    results,
    
  ] = useResults();
  // console.log(results);

  //to run this code only one time
  useEffect(() => {
    
    searchApi("pune");
        navigator.geolocation.getCurrentPosition((position)=>{
          searchAccToDeviceLocation(position.coords.latitude,position.coords.longitude);
        });
        console.log("called");
 
  }, []);

  const handleKeyDownInput = (e) => {
    console.log("called");
    console.log(e);
    if (e.key === "Enter" && e.target.value !== "") {
      console.log(e.target.value);
      searchApi(e.target.value);
    }
  };

  const renderIscity = () => {
    if (isCity === false) {
      return <div className={classes.isCity}>Please enter a valid city</div>;
    } else {
      return null;
    }
  };

  const sortBy = (ev) => {
    if (results !== null) {
      if (ev.target.innerText === "ratings") {
        const sorted_result = utility.sortByRatings(results);
        handleSetResult(sorted_result);
      } else if (ev.target.innerText === "₹(low to high)") {
        const sorted_result = utility.sortByPriceLowToHigh(results);
        handleSetResult(sorted_result);
      } else if (ev.target.innerText === "₹(high to low)") {
        const sorted_result = utility.sortByPriceHighToLow(results);
        handleSetResult(sorted_result);
      }
    }
  };

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main className={classes.Main}>
        <LogicBox inputSearch={handleKeyDownInput} sortBy={sortBy} />
        {renderIscity()}
        <CardContainer data={results} />
      </main>

      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default App;
