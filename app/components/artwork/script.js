import db from './../../firebase.js';

export default {
  data() {
    return {
      artwork: {}
    }
  },

  created() {
    this.fetchData();
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      db.ref(`/artworks/${ this.$route.params.artwork_id }`).on('value', (snapshot) => {
        this.artwork = snapshot.val();
      });
    },

    togglePublished() {
      db.ref(`artworks/${ this.artwork.id }/published`).set(!this.artwork.published);
    },

    status() {
      return this.artwork.published ? 'Published' : 'Unpublished'
    }
  }
}
