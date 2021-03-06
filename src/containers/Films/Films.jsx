import React, { Component } from "react";
import styles from "./Films.module.scss";
import SearchBy from "../../components/SearchBy";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import filmList from "../../data/films";

class Films extends Component {
  getCardJsx = (film) => (
    <React.Fragment key={film.id}>
      <Card film={film} />
    </React.Fragment>
  ); 

  

  render() {
    return (
      <>
        <NavBar />
        <div className={styles.page}>
          <SearchBy handleClickShort={this.props.handleClickShort} handleClickLong={this.props.handleClickLong} handleClickOldToNew={this.props.handleClickOldToNew} handleClickNewToOld={this.props.handleClickNewToOld} handleClickAtoZ={this.props.handleClickAtoZ} handleClickZtoA={this.props.handleClickZtoA}/>
          <section className={styles.filmList}>
            {filmList.map(this.getCardJsx)}
          </section>
        </div>
      </>
    );
  }
}

export default Films;
