import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <button>Facebook</button>
          <button>Google</button>
          <button>Twitter</button>
          <button>Github</button>
          <button>Anonymous</button>
          <button>Logout</button>
          <button>Dashboard</button>
        </div>
        <div>
          <input type="text" placeholder="email" /> <br />
          <input type="password" placeholder="password" /> <br />
          <button>Email / Password Login</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
