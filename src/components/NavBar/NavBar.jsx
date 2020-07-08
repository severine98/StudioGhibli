import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
import logo from "./logo.png";

class NavBar extends Component {
  render() {
    return (
      <navbar className={styles.nav}>
        <article className={styles.leftSideOfNav}>
          <div className={styles.imgContainer}>
                <img src={logo} alt="logo" />
          </div>
          <h1>All about Studio Ghibli!</h1>
        </article>

        <section>
          <Link to="/">
            <p>Films</p>
          </Link>
          <Link to="/people">
            <p>Characters</p>
          </Link>
          <Link to="/watched">
            <p>My Watch List</p>
          </Link>
        </section>
      </navbar>
    );
  }
}

export default NavBar;
