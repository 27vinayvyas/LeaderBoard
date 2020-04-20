import React from "react";
import Button from "./components/button.js";
import Leader from "./components/leader.js";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  /*
  State stores four vars
  count: the count of leaders
  leader_names: array of leader names
  leader_scores: array of leader scores
  leader_position: array of leader positions
  */

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      leader_names: [],
      leader_scores: [],
      leader_position: [],
    };
  }

  /*
    Adds a new leader component,
    makes the required changes in the arrays
    rerenders the app component with updates states
    Immutability is taken care of.
  */
  addLeader = () => {
    let name = "Leader" + (this.state.count + 1);
    let arry = this.state.leader_names;
    arry.push(name);
    let pos = this.state.leader_position;
    pos.push(this.state.count);
    let sc = this.state.leader_scores;
    sc.push(0);
    //console.log(name);
    this.setState({
      count: this.state.count + 1,
      leader_names: arry,
      leader_position: pos,
      leader_scores: sc,
    });
    console.log(this.state.leader_names);
  };

  /*
    Takes care of increment and decrement functionality
    changes the score corresponding to the clicked button
    updates the changes in the arrays
    rerenders the component
    Immutability is taken care of
  */
  perform = (flag, event) => {
    let x = event.target.id;
    let sc = this.state.leader_scores;
    let names = this.state.leader_names;
    //console.log(sc[x]);
    let lead = names[x - 1],
      sco;

    if (flag === 1) {
      sc[x - 1] = sc[x - 1] + 1;
      sco = sc[x - 1];
      while (x > 1 && sc[x - 1] > sc[x - 2]) {
        names[x - 1] = names[x - 2];
        sc[x - 1] = sc[x - 2];
        names[x - 2] = lead;
        sc[x - 2] = sco;
        x--;
      }
    } else if (flag === 2) {
      sc[x - 1] = sc[x - 1] - 1;
      sco = sc[x - 1];
      while (x < sc.length && sc[x] > sc[x - 1]) {
        names[x - 1] = names[x];
        sc[x - 1] = sc[x];
        names[x] = lead;
        sc[x] = sco;
        x++;
      }
    }
    this.setState({
      leader_names: names,
      leader_scores: sc,
    });
  };

  /*
    Increment function
  */
  Increment = (event) => {
    this.perform(1, event);
  };

  /*
    Decrement function
  */

  Decrement = (event) => {
    this.perform(2, event);
  };

  /*
  This is the  main render method.
  Creates a Container with two rows.
  One contains a button component,
  Other have two equal cols,
  each with a synchronised leader component
  */
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Button func={this.addLeader} text="click" id={1}></Button>
        </div>
        <div>count: {this.state.count}</div>

        <div className="row">
          <div className="col-md-6">
            {this.state.leader_position.map((item) => (
              <Leader
                key={item}
                name={this.state.leader_names[item]}
                score={this.state.leader_scores[item]}
                Increment={this.Increment}
                Decrement={this.Decrement}
                idx={item + 1}
              />
            ))}
          </div>
          <div className="col-md-6">
            {this.state.leader_position.map((item) => (
              <Leader
                key={item}
                name={this.state.leader_names[item]}
                score={this.state.leader_scores[item]}
                Increment={this.Increment}
                Decrement={this.Decrement}
                idx={item + 1}
              />
            ))}
          </div>
        </div>

        {/* <div id="div2">{this.state.leader_names[this.state.count - 1]}</div>*/}
      </div>
    );
  }
}

export default App;
