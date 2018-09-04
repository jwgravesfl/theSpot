import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAhQunsX8aLAc1j459PORR1blnMZqzyoJY",
  authDomain: "thespotcoloradosprings.firebaseapp.com",
  databaseURL: "https://thespotcoloradosprings.firebaseio.com",
  projectId: "thespotcoloradosprings",
  storageBucket: "thespotcoloradosprings.appspot.com",
  messagingSenderId: "706866210540"
};

firebase.initializeApp(config)
export default firebase;