import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { state } = this.props;
    return (
      <React.Fragment>
        {state && (
          <div>
            <h1>{state.username}</h1>
            <p>{state.email}</p>
            <img src={state.image} alt="" />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Dashboard;
