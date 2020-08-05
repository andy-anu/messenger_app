import firebase from "firebase";

const firebaseApp=firebase.initializeApp( {
    apiKey: "AIzaSyDaLKAW5f2rT0l-ZdvRw03UinetVSypw20",
    authDomain: "facebook-messenger-clone-49a76.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-49a76.firebaseio.com",
    projectId: "facebook-messenger-clone-49a76",
    storageBucket: "facebook-messenger-clone-49a76.appspot.com",
    messagingSenderId: "830328736465",
    appId: "1:830328736465:web:4759053b60d2010eefd3f0",
    measurementId: "G-1XQT5YDTH7"
  });

  const db=firebaseApp.firestore();

  export default db;