import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};


export const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
   return firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const logedIn = {
          isSigned: true,
          name: displayName,
          email: email,
          photo: photoURL,
          success: true
        };
        return logedIn;
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });
  };


export const handleSignOut = () => {
   return firebase
      .auth()
      .signOut()
      .then(() => {
        const logedOut = {
          isSigned: false,
          name: "",
          email: "",
          photo: "",
        };
        return logedOut;
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });
  };

export const createUserWithEmailAndPassword = (name,email,password) => {
   return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      updateUserName(name);
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = { };
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
}



export const signInWithEmailAndPassword = (email,password) => {
   return firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
     return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = { };
      newUserInfo.error = error.message;
      newUserInfo.success = false;
     return newUserInfo;
    });
}


const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("user name update successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };



const LoginManager = () => {
  return <div></div>;
};

export default LoginManager;
