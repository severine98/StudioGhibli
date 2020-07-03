import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
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
          <Link to="/">
            <p>Films</p>
          </Link>
          <Link to="/people">
            <p>People</p>
          </Link>
          <Link to="/watched">
            <p>My Watch List</p>
          </Link>
        </section>
      </div>
    );
  }
}

export default NavBar;
