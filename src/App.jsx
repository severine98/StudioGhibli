import React, { Component } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";
import SearchBy from "./components/SearchBy";

class App extends Component {
  render() {
    return (
      <div className={styles.content}>
        <NavBar />
        <section className={styles.sectionApp}>
        < SearchBy />
        <div className={styles.cards}>
          <Routes />
        </div>
        </section>
      </div>
    );
  }
}
export default App;
