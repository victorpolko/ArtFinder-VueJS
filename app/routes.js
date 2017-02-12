// Components
import Artwork from 'artwork/'
import ArtworksList from 'artworks-list/'

export default [
  { name: 'home', path: '/', redirect: { name: 'index' } },
  { name: 'index', path: '/artworks', component: ArtworksList },
  { name: 'artwork', path: '/artworks/:artwork_id', component: Artwork }
];
