// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    APIKEY: process.env.REACT_APP_apiKey,
    AUTHDOMAIN: process.env.REACT_APP_authDomain,
    PROJECTID: process.env.REACT_APP_projectId,
    STORAGEBUCKET: process.env.REACT_APP_storageBucket,
    MESSAGINGSENDERID: process.env.REACT_APP_messagingSenderId,
    APPID: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app