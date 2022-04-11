// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwBrzB8cqb1pb1HH9g5VIVwlpTwFeiGlI",
  authDomain: "camp-meshi.firebaseapp.com",
  databaseURL: "https://camp-meshi-default-rtdb.firebaseio.com",
  projectId: "camp-meshi",
  storageBucket: "camp-meshi.appspot.com",
  messagingSenderId: "837089495806",
  appId: "1:837089495806:web:1b50dd2ab365c8557c33af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;