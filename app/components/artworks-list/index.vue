<template lang="pug">

  .artworks-list
    .artwork(v-for="artwork in artworks")
      .cell
        router-link(:to="{ name: 'artwork', params: { artwork_id: artwork.id } }")
          img(:src="artwork.image" height="150")
      .cell {{ artwork.title }}
      .cell {{ artwork.artist }}, {{ artwork.year }}
      .cell {{ artwork.mediums }}
      .cell
        a(href="javascript:void(0)" v-on:click="togglePublished(artwork)") {{ status(artwork) }}

</template>

<script type="text/javascript" src="./script.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
