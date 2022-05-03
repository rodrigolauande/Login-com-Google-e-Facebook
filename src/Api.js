import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import FirebaseConfig from "./FirebaseConfig";

const firebaseApp = firebase.initializeApp(FirebaseConfig)
const db = firebaseApp.firestore();

export default {

    googleLogar: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    },

    facebookLogar: async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    }
}