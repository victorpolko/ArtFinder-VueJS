<template lang="pug">

    .artwork
      .cell
        img(v-bind:src="artwork.image" height="150")
      .cell {{ artwork.title }}
      .cell {{ artwork.artist }}, {{ artwork.year }}
      .cell {{ artwork.mediums }}
      .cell
        a(href="javascript:void(0)" v-on:click="togglePublished(artwork)") {{ status(artwork) }}

      router-link(:to="{ name: 'index' }")
        span Go to Index

</template>

<script type="text/javascript" src="./script.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
