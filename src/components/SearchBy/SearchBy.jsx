import React, { Component } from "react";
import styles from "./SearchBy.module.scss";

class SearchBy extends Component {
  state = {};
  render() {
    return (
      <div className={styles.searchBy}>
        <h1>Search By</h1>
        <section>
          <a href="#">A - Z</a>
          <br />
          <a href="#">Z - A</a>
          <br />
          <a href="#">Oldest to newest</a>
          <br />
          <a href="#">Newest to oldest</a>
          <br />
          <a href="#">Shortest run time</a>
          <br />
          <a href="#">Longest run time</a>
          <br />
          <a href="#">My personal ratings</a>
        </section>
      </div>
    );
  }
}
export default SearchBy;
