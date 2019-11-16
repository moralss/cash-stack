import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
  apiKey: "AIzaSyA4Lx3qTjbXO1GSMhpovPIUyk8sZ8jzi5Q",
  authDomain: "cash-stack-d2f39.firebaseapp.com",
  databaseURL: "https://cash-stack-d2f39.firebaseio.com",
  projectId: "cash-stack-1",
  storageBucket: "cash-stack-d2f39.appspot.com",
  messagingSenderId: "525317125872",
  appId: "1:525317125872:web:2220b2bd04e1c64aecb435",
  measurementId: "G-CG4QG3YNNN"
}
firebase.initializeApp(config);

var storage = firebase.storage();
console.log("storaagre ", storage);

export {
  storage,
  firebase as
  default
};