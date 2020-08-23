import React, {useEffect } from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import CardContainer from "../cardContainer/CardContainer";
import LogicBox from "../logicBox/LogicsBox";
import useResults from "../../hooks/useResults";
import classes from "./App.module.scss";

const App = () => {
  const [searchApi, results, errorMessage] = useResults();
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

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main className={classes.Main}>
        <LogicBox inputSearch={handleKeyDownInput} />
        <CardContainer data={results} />
      </main>

      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default App;
