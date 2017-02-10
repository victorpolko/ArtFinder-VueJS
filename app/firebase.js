import Firebase from 'firebase'

let fbapp = Firebase.initializeApp({
  apiKey: 'AIzaSyAg18E2zWLRLD99fI0bghUUC5t-ISakX3g',
  authDomain: 'artfinder-8f455.firebaseapp.com',
  databaseURL: 'https://artfinder-8f455.firebaseio.com/'
});

let db = fbapp.database();

export default db;
