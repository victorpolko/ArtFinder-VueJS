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
    this.lastUsedTab = this.tabIndex;
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
      artwork.published = !artwork.published;
      db.ref(`artworks/${ artwork.id }/published`).set(artwork.published);
      this.findArt(false);
    },

    findArt(switchToTab = true) {
      this.fetchData();
      if (switchToTab) this.setTab(this.lastUsedTab);
      let search = this.searchString.trim().toLowerCase();

      if (search.length > 0) {
        if (switchToTab) this.setTab(2);

        this.filteredArtworks = this.artworks.filter((art) => {
          return (
            [
              art.title,
              art.artist,
              art.mediums,
              art.year + ''
            ].some(elem => elem.toLowerCase().match(search))
          );
        });
      }
    }
  }
}
