// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    APIKEY: process.env.REACT_APP_APIKEY,
    AUTHDOMAIN: process.env.REACT_APP_AUTHDOMAIN,
    PROJECTID: process.env.REACT_APP_PROJECTID,
    STORAGEBUCKET: process.env.REACT_APP_STORAGEBUCKET,
    MESSAGINGSENDERID: process.env.REACT_APP_MESSAGINGSENDERID,
    APPID: process.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app