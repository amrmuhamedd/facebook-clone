import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAvHBNFqFCk2KvdQRv5n_KEpNOambVYZwA",
    authDomain: "facebook-imitation.firebaseapp.com",
    databaseURL: "https://facebook-imitation.firebaseio.com",
    projectId: "facebook-imitation",
    storageBucket: "facebook-imitation.appspot.com",
    messagingSenderId: "683703398308",
    appId: "1:683703398308:web:685a2c7a53dcbd7ba79b31",
    measurementId: "G-G3GLE59D9D"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;