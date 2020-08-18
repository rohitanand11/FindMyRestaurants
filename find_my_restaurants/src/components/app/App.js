import React from "react";
// import Classes from './App.module.scss';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Card from "../card/Card";
import classes from "./App.module.scss";

const App = () => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main className={classes.Main}>
          <Card />
      </main>

      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default App;
