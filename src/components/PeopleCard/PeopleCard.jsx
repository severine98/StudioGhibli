import React, { Component } from "react";
import styles from "./PeopleCard.module.scss";

class PeopleCard extends Component {
  render() {
    const { name, gender, age, image } = this.props.person;

    return (
      <div className={styles.cardFront}>
        <img src={image} alt="pic" />
        <section className={styles.front}>
          <h2>{name}</h2>
          <h3>{gender}</h3>
          <p>{age} years old</p>
        </section>
      </div>
    );
  }
}

export default PeopleCard;
