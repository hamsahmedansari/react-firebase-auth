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
  handelLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(res => {
        this.setState({
          username: "",
          image: "",
          email: ""
        });
      });
  };
  isSignIn = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        return true;
      }
      return false;
    });
  };
  handelAnonymousSignIn = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(({ user }) => {
        console.log(user);
        this.setState({
          username: "Alien",
          image: "https://pbs.twimg.com/media/Dqi1N9IWsAIstzT.png",
          email: "alien@alieen.com"
        });
      });
  };

  handelFacebookSignIn = () => {
    const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(facebookAuthProvider)
      .then(({ user }) => {
        console.log(user);
        this.setState({
          username: user.displayName,
          image: user.photoURL,
          email: user.email
        });
      })
      .catch(err => console.log(err));
  };

  handelGithubSignIn = () => {
    const GithubAuthProvider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(GithubAuthProvider)
      .then(({ user }) => {
        console.log(user);
        this.setState({
          username: user.displayName,
          image: user.photoURL,
          email: user.email
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <React.Fragment>
        <FirebaseAuthProvider {...config} firebase={firebase}>
          {/* <div>
            
            <button
              data-testid="signin-anon"
              onClick={() => {
                firebase.auth().signInAnonymously();
              }}
            >
              Sign In Anonymously
            </button>
            
          </div> */}
          <div>
            <button onClick={this.handelGoogleSignIn}>Google</button>
            <button onClick={this.handelAnonymousSignIn}>Anonymous</button>
            <button onClick={this.handelFacebookSignIn}>Facebook</button>
            <button>Twitter (api under review)</button>
            <button onClick={this.handelGithubSignIn}>Github</button>
            {this.state.username ? (
              <button onClick={this.handelLogout}>Logout</button>
            ) : (
              ""
            )}
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
