import React, { Component } from "react";
import styles from "./CardBack.module.scss";

class CardBack extends Component {
  shortenDescription = (movieDescription) => {
    if (movieDescription.length < 180) {
      return movieDescription;
    } else {
      return movieDescription.substring(0, 350) + "..."; //Need to figure this out
    }
  };

  render() {
    const { title, description } = this.props.film;

    return (
      <div className={styles.cardBack}>
        <section className={styles.back}>
          <h2>{title}</h2>
          <br />
          <p>Brief description:</p>
          <p>{this.shortenDescription(description)}</p>
        </section>
      </div>
    );
  }
}

export default CardBack;
