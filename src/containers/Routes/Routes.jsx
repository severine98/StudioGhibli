import React, { Component } from "react";
import { Router } from "@reach/router";

import Locations from "../Locations";
import People from "../People";
import Films from "../Films";
//import NotFound from "../../components/NotFound";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Films path="/" />
        <People path="people" />
        <Locations path="locations" />
        {/* <NotFound default /> */}
      </Router>
    );
  }
}

export default Routes;
