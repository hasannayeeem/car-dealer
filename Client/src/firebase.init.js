// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey:process.env.REACT_APP_apiKey,
//     authDomain:process.env.REACT_APP_authDomain,
//     projectId:process.env.REACT_APP_projectId,
//     storageBucket:process.env.REACT_APP_storageBucket,
//     messagingSenderId:process.env.REACT_APP_messagingSenderId,
//     appId:process.env.REACT_APP_appId,
//     measurementId:process.env.REACT_APP_appId,  
// };
const firebaseConfig = {
  apiKey: "AIzaSyCiit5iG5WFey_hzbi_F7cR4ng0GWnTMOM",
  authDomain: "autostars-car-dealer.firebaseapp.com",
  projectId: "autostars-car-dealer",
  storageBucket: "autostars-car-dealer.appspot.com",
  messagingSenderId: "820143495657",
  appId: "1:820143495657:web:ab2a972f256d9e5e8a9378"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;



