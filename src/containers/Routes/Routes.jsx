import React, { Component } from "react";
import { Router } from "@reach/router";
import Watched from "../Watched";
import People from "../People";
import Films from "../Films";
import NotFound from "../../components/NotFound";
import films from "../../data/films";

class Routes extends Component {
  render() {
    const sortByRunTime = () => {
      films.sort(function(a, b) {
        return a.rt_score - b.rt_score;
    });
    };

    const sortByRunTimeVersa = () => {
      films.sort(function(a, b) {
        return b.rt_score - a.rt_score;
    });
    console.log("hi i work");
    };

    const sortOldToNew = () => {
      films.sort(function(a, b) {
        return a.release_date - b.release_date;
    });
    }

    const sortNewToOld = () => {
      films.sort(function(a, b) {
        return b.release_date - a.release_date;
    });
    }

    const sortAtoZ = () => {
      films.sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });
    }

    const sortZtoA = () => {
      films.sort(function(a, b) {
        return b.title.localeCompare(a.title);
    });
    }

    return (
      <Router>
        <Films path="/" handleClickShort={sortByRunTime} handleClickLong={sortByRunTimeVersa} handleClickOldToNew={sortOldToNew} handleClickNewToOld={sortNewToOld} handleClickAtoZ={sortAtoZ}  handleClickZtoA={sortZtoA}/>
        <People path="people" />
        <Watched path="watched" />
        <NotFound default />
      </Router>
    );
  }
}

export default Routes;
