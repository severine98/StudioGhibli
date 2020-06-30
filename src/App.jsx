import React, { Component } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import SearchBy from "./components/SearchBy";
import filmList from "./films/films";


class App extends Component {

  getCardJsx = (film) => (
    <React.Fragment key={film.id}>
      <Card film={film} />
    </React.Fragment>
  );
  

  render() {
    return (
      <div className={styles.content}>
        <NavBar />
        <section className={styles.sectionApp}>
          <SearchBy />
          <section className={styles.filmList}>
            {filmList.map(this.getCardJsx)}
          </section>
        </section>
      </div>
    );
  }
}
export default App;
