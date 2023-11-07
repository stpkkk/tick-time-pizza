// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyAN6ZY1jKiqEEI1AfGAsFmMmnrt1CFnpjI',
  authDomain: 'tick-time-pizza.firebaseapp.com',
  projectId: 'tick-time-pizza',
  storageBucket: 'tick-time-pizza.appspot.com',
  messagingSenderId: '787243362974',
  appId: '1:787243362974:web:cb3924f3de31974bb7a98f',
  measurementId: 'G-CPHQMCLZXN',
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
