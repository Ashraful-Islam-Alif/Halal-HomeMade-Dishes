// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQqqXGV-iFgkzSGTEJj_A8Ir38LKd8UPA",
    authDomain: "halal-food-services.firebaseapp.com",
    projectId: "halal-food-services",
    storageBucket: "halal-food-services.appspot.com",
    messagingSenderId: "677181187249",
    appId: "1:677181187249:web:f92d7af0b008440a52ee90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;