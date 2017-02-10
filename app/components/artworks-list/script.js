import db from './../../firebase.js';

export default {
  data() {
    return {
      artworks: []
    }
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      db.ref('/artworks').orderByChild('published').on('value', (snapshot) => {
        this.artworks = [];

        snapshot.forEach((childSnapshot) => {
          this.artworks.unshift(childSnapshot.val());
        });
      });
    },

    togglePublished(artwork) {
      db.ref(`artworks/${ artwork.id }/published`).set(!artwork.published);
    },

    status(artwork) {
      return artwork.published ? 'Published' : 'Unpublished'
    }
  }
}
