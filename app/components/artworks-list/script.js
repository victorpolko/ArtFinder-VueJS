import db from './../../firebase.js';

export default {
  data() {
    return {
      artworks: [],
      tabIndex: 0
    }
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      db.ref('/artworks').orderByChild('year').on('value', (snapshot) => {
        this.artworks = [];

        snapshot.forEach((childSnapshot) => {
          this.artworks.unshift(childSnapshot.val());
        });
      });
    },

    publishedArtworks() {
      return this.artworks.filter((aw) => aw.published);
    },

    unpublishedArtworks() {
      return this.artworks.filter((aw) => !aw.published);
    },

    isTab(index) {
      return this.tabIndex == index;
    },

    setTab(index) {
      this.tabIndex = index;
    },

    togglePublished(artwork) {
      db.ref(`artworks/${ artwork.id }/published`).set(!artwork.published);
    },

    status(artwork) {
      return artwork.published ? 'Published' : 'Unpublished';
    }
  }
}
