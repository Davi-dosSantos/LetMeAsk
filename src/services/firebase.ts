import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyCOQ8ZLeqPG6rzlxDt5JyYdkCS29_wGA9A",
    authDomain: "letmeask-4781b.firebaseapp.com",
    databaseURL: "https://letmeask-4781b-default-rtdb.firebaseio.com",
    projectId: "letmeask-4781b",
    storageBucket: "letmeask-4781b.appspot.com",
    messagingSenderId: "593576424859",
    appId: "1:593576424859:web:2c9bd6d923e62a332edd3e"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();