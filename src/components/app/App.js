import React, {useState,useEffect } from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import CardContainer from "../cardContainer/CardContainer";
import LogicBox from "../logicBox/LogicsBox";
import useResults from "../../hooks/useResults";
import classes from "./App.module.scss";

const App = () => {

  const [searchApi,isCity, results, errorMessage] = useResults();
  console.log(results);

  //to run this code only one time
  useEffect(() => {
    searchApi("pune");
  }, []);

  const handleKeyDownInput = (e) => {
    console.log("called");
    console.log(e);
    if (e.key === "Enter" && e.target.value !=="") {
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


  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main className={classes.Main}>
        <LogicBox inputSearch={handleKeyDownInput} />
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
