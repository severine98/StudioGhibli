import React, { Component } from "react";
import styles from "./People.module.scss";
import NavBar from "../../components/NavBar";
import PeopleCard from "../../components/PeopleCard";
import people from "../../data/people";
import SearchBy from "../../components/SearchBy";

class People extends Component {
  getCardJsx = (person) => (
    <React.Fragment key={person.id}>
      <PeopleCard person={person} />
    </React.Fragment>
  );

  render() {
    return (
      <>
        <NavBar />
        <p className={styles.watched}>A few characters from the films:</p>
        <div className={styles.page}>
          <section className={styles.filmList}>
            {people.map(this.getCardJsx)}
          </section>
        </div>
      </>
    );
  }
}

export default People;
