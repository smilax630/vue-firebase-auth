import firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAgGijp-uzVXvs8omRo0LNrorEZ_GC1bv8',
  authDomain: 'chat-app-5e5cd.firebaseapp.com',
  databaseURL: 'https://chat-app-5e5cd.firebaseio.com',
  projectId: 'chat-app-5e5cd',
  storageBucket: 'chat-app-5e5cd.appspot.com',
  messagingSenderId: '475107268082',
  appId: '1:475107268082:web:7b165837daa10c8f1f076b',
};

export const getCurrentUser = () => new Promise((resolve, reject) => {
  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    unsubscribe();
    resolve(user);
  }, reject);
});
firebase.initializeApp(config);

export default firebase;
