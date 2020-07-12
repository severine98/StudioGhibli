import React, { Component } from "react";
import styles from "./SearchBy.module.scss";

class SearchBy extends Component {
  render() {
    return (
      <div className={styles.searchBy}>
        <h1>Search By</h1> <br/>
        <section>
          <a href="#" onClick={this.props.handleClickAtoZ}>A - Z</a> 
          <br />
          <a href="#" onClick={this.props.handleClickZtoA}>Z - A</a>
          <br />
          <a href="#" onClick={this.props.handleClickOldToNew}>Oldest to newest</a>
          <br />
          <a href="#" onClick={this.props.handleClickNewToOld}>Newest to oldest</a>
          <br />
          <a href="#" onClick={this.props.handleClickShort}>Shortest run time</a>
          <br />
          <a href="#" onClick={this.props.handleClickLong}>Longest run time</a>
          <br />
        </section>
      </div>
    );
  }
}
export default SearchBy;
