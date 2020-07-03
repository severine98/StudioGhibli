import React, { Component } from "react";
import styles from "./Watched.module.scss";

import Card from "../../components/Card";
import filmList from "../../data/films";
import NavBar from "../../components/NavBar";

class Watched extends Component {
  getCardJsx = (film) => (
    <React.Fragment key={film.id}>
      <Card film={film} />
    </React.Fragment>
  );

  render() {
    return (
      <>
        <NavBar />
        <p className={styles.watched}>The films I have watched so far:</p>
        <section className={styles.filmList}>
          {filmList
            .filter((film) => film.watched === true)
            .map(this.getCardJsx)}
        </section>
      </>
    );
  }
}

export default Watched;
