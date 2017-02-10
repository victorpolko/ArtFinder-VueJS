import db from './../../firebase.js';

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
