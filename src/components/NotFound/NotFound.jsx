import React, { Component } from "react";
import styles from "./NotFound.module.scss";
import { Link } from "@reach/router";

class NotFound extends Component {
  render() {
    return (
      <section className={styles.notFound}>
        <div>
          <h2>Page not found</h2>
          <Link to="/">
            <a href="">Go back to Film page</a> <br />
          </Link>
          <Link to="/people">
            <a href="">Go back to People page</a>
            <br />
          </Link>
          <Link to="/watched">
            <a href="">Go back to My Watch list page</a>
          </Link>
        </div>
      </section>
    );
  }
}

export default NotFound;
