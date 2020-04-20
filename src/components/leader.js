import React, { Component } from "react";
import Button from "./button.js";

export default class Leader extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4"> {this.props.name} </div>
        <div className="col-md-2"> {this.props.score} </div>
        <Button
          className="col-md-3"
          text="Increment"
          func={this.props.Increment}
          id={this.props.idx}
        />
        <Button
          className="col-md-3"
          text="Decrement"
          func={this.props.Decrement}
          id={this.props.idx}
        />
      </div>
    );
  }
}
