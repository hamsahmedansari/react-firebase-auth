import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { config } from "../../firebase-config";
import Dashboard from "../dashboard";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      image: "",
      email: ""
    };
  }
  handelGoogleSignIn = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        console.log(user);
        this.setState({
          username: user.displayName,
          image: user.photoURL,
          email: user.email
        });
      });
  };
  render() {
    return (
      <React.Fragment>
        <FirebaseAuthProvider {...config} firebase={firebase}>
          {/* <div>
            <button onClick={this.handelGoogleSignIn}>
              Sign In with Google
            </button>
            <button
              data-testid="signin-anon"
              onClick={() => {
                firebase.auth().signInAnonymously();
              }}
            >
              Sign In Anonymously
            </button>
            <button
              onClick={() => {
                firebase.auth().signOut();
              }}
            >
              Sign Out
            </button>
          </div> */}
          <div>
            <button onClick={this.handelGoogleSignIn}>Google</button>
            <button>Facebook</button>
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
          <Dashboard state={this.state} />
        </FirebaseAuthProvider>
      </React.Fragment>
    );
  }
}

export default Home;
