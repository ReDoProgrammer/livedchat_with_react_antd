import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBo8ZcpOGVfoaSTiWT-2v-Jb2TlhxC0Cfo",
    authDomain: "livedchat-39807.firebaseapp.com",
    projectId: "livedchat-39807",
    storageBucket: "livedchat-39807.appspot.com",
    messagingSenderId: "996434337624",
    appId: "1:996434337624:web:df1f37d745a0a3348ecf2d",
    measurementId: "G-FD90SLZ8WH"
  };
  
  // Initialize Firebase
  const app = firebase.default.initializeApp(firebaseConfig); 
  const analytics = firebase.analytics.Analytics; 

  const auth = firebase.auth();
  const db = firebase.firestore();

  export {db,auth};
  export default firebase;