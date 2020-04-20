import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button className="col-md-2" onClick={this.props.func} id={this.props.id}>
        {" "}
        {this.props.text}{" "}
      </button>
    );
  }
}
