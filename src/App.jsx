import React, { Component } from "react";
import styles from "./App.module.scss";
import Routes from "./containers/Routes";

class App extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Routes />
      </div>
    );
  }
}
export default App;
