import React, { Component } from "react";
import styles from "./Films.module.scss";

import Card from "../../components/Card";
import filmList from "../../films/films";

class Films extends Component {
  getCardJsx = (film) => (
    <React.Fragment key={film.id}>
      <Card film={film} />
    </React.Fragment>
  );

  render() {
    return (
      <section className={styles.filmList}>
        {filmList.map(this.getCardJsx)}
      </section>
    );
  }
}

export default Films;
