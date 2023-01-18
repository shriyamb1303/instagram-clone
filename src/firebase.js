import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-ZIAo5QH2mnOQD6lipu-WsDTEavVxI-c",
  authDomain: "instagram-clone-react-2c48f.firebaseapp.com",
  projectId: "instagram-clone-react-2c48f",
  storageBucket: "instagram-clone-react-2c48f.appspot.com",
  messagingSenderId: "382273626682",
  appId: "1:382273626682:web:228315b92fb26615f84b03",
  measurementId: "G-XSEGHLPSHV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, storage };
