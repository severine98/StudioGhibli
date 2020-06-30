import React, { Component } from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront"; 
import CardBack from "../CardBack"; 

class Card extends Component {
  state = {
    isFaceDown: false,
  };

  flipCard = () => {
    this.setState({ isFaceDown: !this.state.isFaceDown });
  };

  // getFav = () => 
    // this.state.isFaceDown ? <CardFront film={film} /> : <CardBack film={film} />

  render() {
    const {
      film
    } = this.props;

    const flipStyles = this.state.isFaceDown ? styles.faceDown : "";

    return (
      <section
        className={`${styles.recipeCard} ${flipStyles}`}
        onClick={() => this.flipCard()}
      >
        
        <div className={styles.front}>
          <CardFront film={film} />
        </div>
        <div className={styles.back}>
          <CardBack film={film} />
        </div>
      </section>
    );
  }
}

export default Card;
