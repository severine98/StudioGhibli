import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import logo from "./logo.png";

class NavBar extends Component {
  render() {
    return (
      <div className={styles.nav}>
        <article>
          <img src={logo} alt="logo" />
          <h1>All about Studio Ghibli!</h1>
        </article>

        <section>
          <p>Films</p>
          <p>People</p>
          <p>Locations</p>
        </section>
      </div>
    );
  }
}

export default NavBar;
