import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnpexRWblmwexomzYqqtejDHR6LT5PhqI",
  authDomain: "fit-boss-fae46.firebaseapp.com",
  projectId: "fit-boss-fae46",
  storageBucket: "fit-boss-fae46.appspot.com",
  messagingSenderId: "1095375000930",
  appId: "1:1095375000930:web:16e2737fd65da9efa0883b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;