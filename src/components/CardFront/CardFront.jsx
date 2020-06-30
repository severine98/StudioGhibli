import React, { Component } from "react";
import styles from "./CardFront.module.scss";

class CardFront extends Component {

  render() {
    const {
      title,
      director,
      release_date,
      rt_score,
      picture
    } = this.props.film;

    return (
      <div className={styles.cardFront}>
        <img src={picture} alt="pic" />
        <section className={styles.front}>
        <h2>{title}</h2>
          <h3>Director: {director}</h3>
          <p>Release date: {release_date}</p>
          <p>{rt_score} minutes</p> 
        </section>
      </div>
    );
  }
}

export default CardFront;
