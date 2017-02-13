import db from './../../firebase.js';

export default {
  data() {
    return {
      searchString: '',
      tabIndex: 0,
      artworks: []
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
      this.lastUsedTab = index;
    },

    togglePublished(artwork) {
      db.ref(`artworks/${ artwork.id }/published`).set(!artwork.published);
    },

    findArt() {
      this.fetchData();
      this.tabIndex = this.lastUsedTab;
      let search = this.searchString.trim().toLowerCase();

      if (search.length > 0) {
        this.tabIndex = 2;

        this.filteredArtworks = this.artworks.filter((art) => {
          return (
            art.title.toLowerCase().match(search) || art.artist.toLowerCase().match(search) || art.mediums.toLowerCase().match(search) || art.year.toString().match(search)
          );
        });
      }
    }
  }
}
