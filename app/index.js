import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Components
import artwork from 'artwork/'
import artworksList from 'artworks-list/'

const routes = [
  { name: 'index', path: '/', component: artworksList },
  { name: 'artwork', path: '/artworks/:artwork_id', component: artwork }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#router')
