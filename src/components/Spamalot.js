import Spam from "./Spam";
import React, { Component } from "react";

class Spamalot extends Component {
  makeArrayOfJSX() {
    let arrayOfJSX = [];
    for (let i = 0; i < 500; i++) {
      arrayOfJSX.push(Spam());
    }
    return arrayOfJSX;
  }
  render() {
    {
      return this.makeArrayOfJSX();
    }
  }
}

export default Spamalot;
