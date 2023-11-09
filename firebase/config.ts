import { initializeApp } from 'firebase/app';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyAN6ZY1jKiqEEI1AfGAsFmMmnrt1CFnpjI',
  authDomain: 'tick-time-pizza.firebaseapp.com',
  projectId: 'tick-time-pizza',
  storageBucket: 'tick-time-pizza.appspot.com',
  messagingSenderId: '787243362974',
  appId: '1:787243362974:web:cb3924f3de31974bb7a98f',
  measurementId: 'G-CPHQMCLZXN',
};

const app = initializeApp(firebaseConfig);

export { app };
