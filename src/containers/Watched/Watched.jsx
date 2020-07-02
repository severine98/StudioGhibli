import React, { Component } from "react";
import styles from "./Watched.module.scss";

import Card from "../../components/Card";
import filmList from "../../data/films";

class Watched extends Component {
  
  // create a new array that filter through filmList and gets movies that are truthy for 'watched' 
  //replace filmList on line 25 with new array
  //favFilms = 
  // const watchedList = []
  // filmList.filter((film) => {

  // })

  getCardJsx = (film) => (
    <React.Fragment key={film.id}>
      <Card film={film} />
    </React.Fragment>
  );

  render() {
    return (
      <>
      <p className={styles.watched}>The films I have watched so far:</p>
      <section className={styles.filmList}>
        {filmList.filter(film => film.watched === true).map(this.getCardJsx)}
      </section>
      </>
    );
  }
}

export default Watched;
