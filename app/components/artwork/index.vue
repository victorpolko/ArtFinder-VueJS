<template lang="pug">

  div
    .uk-margin
      ul.uk-breadcrumb
        li
          router-link(:to="{ name: 'index' }")
            | All artworks
        li.uk-active
          span(v-show="artwork.title") {{ artwork.title }} by {{ artwork.artist }}

    .uk-align-center.uk-width-1-2(uk-grid)
      div
        .uk-card.uk-card-default
          .uk-card-media-top
            img(v-bind:src="artwork.image")
            .uk-card-body
              h3.uk-card-title {{ artwork.title }}
              p {{ artwork.mediums }}
              p {{ artwork.artist }}, {{ artwork.year }}
              p
                a(href="javascript:void(0)" v-on:click="togglePublished(artwork)") {{ status(artwork) }}

</template>

<script type="text/javascript" src="./script.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
