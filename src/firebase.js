import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVabx1q4Bnam9DEFDMPxBR0BRZUmY70os",
  authDomain: "netflix-99976.firebaseapp.com",
  projectId: "netflix-99976",
  storageBucket: "netflix-99976.appspot.com",
  messagingSenderId: "1013965684912",
  appId: "1:1013965684912:web:79166874a0c15fb693bb75",
  measurementId: "${config.measurementId}"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;