<template lang="pug">

  .artworks-list
    nav.uk-navbar-container.uk-margin(uk-navbar)
      .uk-navbar-left
        router-link.uk-navbar-item.uk-logo(:to="{ name: 'index' }")
          img(src="/logo.png")

    ul.uk-tab.uk-flex-center
      li(v-bind:class="{ 'uk-active': isTab(0) }")
        a(href="#" v-on:click="setTab(0)") Published Artworks
      li(v-bind:class="{ 'uk-active': isTab(1) }")
        a(href="#" v-on:click="setTab(1)") Unpublished Artworks

    div(v-if="isTab(0)")
      div(v-if="publishedArtworks().length")
        table.uk-table.uk-table-small.uk-table-middle
          colgroup
            col(width="30%")
            col(width="20%")
            col(width="15%")
            col(width="15%")
            col(width="10%")
            col(width="10%")

          thead
            tr
              th Representation
              th Title
              th Mediums
              th Artist
              th Year
              th Published?

          tbody
            tr(v-for="artwork in publishedArtworks()")
              td.uk-table-link
                router-link.uk-text-center.uk-link-reset(:to="{ name: 'artwork', params: { artwork_id: artwork.id } }")
                  img.uk-width-1-3(:src="artwork.image")
              td.uk-table-link
                router-link.uk-link-reset(:to="{ name: 'artwork', params: { artwork_id: artwork.id } }")
                  | {{ artwork.title }}
              td {{ artwork.mediums }}
              td {{ artwork.artist }}
              td {{ artwork.year }}
              td.uk-text-center.published(v-on:click="togglePublished(artwork)")
                svg.star(v-bind:class="{ published: artwork.published }")
                  use(xlink:href="#star")
                    title {{ artwork.published ? 'Unpublish me' : 'Publish me' }}

      div(v-else)
        img.uk-align-center.uk-width-1-4(src="/empty.png")

    div(v-if="isTab(1)")
      div(v-if="unpublishedArtworks().length")
        table.uk-table.uk-table-small.uk-table-middle
          colgroup
            col(width="30%")
            col(width="20%")
            col(width="15%")
            col(width="15%")
            col(width="10%")
            col(width="10%")

          thead
            tr
              th Representation
              th Title
              th Mediums
              th Artist
              th Year
              th Published?

          tbody
            tr(v-for="artwork in unpublishedArtworks()")
              td.uk-table-link
                router-link.uk-text-center.uk-link-reset(:to="{ name: 'artwork', params: { artwork_id: artwork.id } }")
                  img.uk-width-1-3(:src="artwork.image")
              td.uk-table-link
                router-link.uk-link-reset(:to="{ name: 'artwork', params: { artwork_id: artwork.id } }")
                  | {{ artwork.title }}
              td {{ artwork.mediums }}
              td {{ artwork.artist }}
              td {{ artwork.year }}
              td.uk-text-center.published(v-on:click="togglePublished(artwork)")
                svg.star(v-bind:class="{ published: artwork.published }")
                  use(xlink:href="#star")
                    title {{ artwork.published ? 'Unpublish me' : 'Publish me' }}


      div(v-else)
        img.uk-align-center.uk-width-1-4(src="/empty.png")

    hr
    svg.uk-hidden(xmlns="http://www.w3.org/2000/svg")
      symbol(id="star" viewBox="0 0 20 20")
        polygon(stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27")

</template>

<script type="text/javascript" src="./script.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
