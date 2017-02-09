import Firebase from 'firebase'

let fbapp = Firebase.initializeApp({
  apiKey: 'AIzaSyAg18E2zWLRLD99fI0bghUUC5t-ISakX3g',
  authDomain: 'artfinder-8f455.firebaseapp.com',
  databaseURL: 'https://artfinder-8f455.firebaseio.com/'
});

let db = fbapp.database();

export default {
  data() {
    return {
      artworks: []
    }
  },

  beforeCreate() {
    // Get all data
    // db.ref('/artworks').on('value', (snapshot) => {
    //   this.artworks = snapshot.val();
    // });

    // Get all data and query it
    db.ref('/artworks').orderByChild('published').on('value', (snapshot) => {
      this.artworks = [];

      snapshot.forEach((childSnapshot) => {
        this.artworks.push(childSnapshot.val());
      });
    });
  },

  methods: {
    togglePublished(artwork) {
      db.ref(`artworks/${ artwork.id }/published`).set(!artwork.published);
    },

    status(artwork) {
      return artwork.published ? 'Published' : 'Unpublished'
    }
  }
}
