<template>
  <div class="albums">
    <h1>Lista de albums</h1>
    <ul>
      <li v-for="album in albums" :key="album.id">{{album.title}}</li>      
    </ul>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
  name: 'AlbumsList',
  computed: {
    ...mapState(['albums'])
  },
  methods: {
    ...mapActions(['getAlbums'])
  },
  created() {
    this.getAlbums()
  },
}
</script>

<style scoped>
  .albums {
    margin: 1em auto;
    width: 50%;
    /* margin-top: 2em; */    
    text-align: center;    
  }

  h1 {
    margin: 1.3em;
    font-size: 2.5em;
    color: teal;
  }

  ul {
    list-style: none;
    /* border: 1px solid #cecece; */
  }

  li {
    /* margin-top: 5px; */
    display: flex;
    /* padding: 1em; */
    justify-content: center;
    height: 40px;
    padding-left: 1em;
    align-items: center;
    border-bottom: 1px solid white;
  }

  li:nth-child(even) {
    background: #c2cce4;    
  }
  li:nth-child(odd) {
    background: #e3e6ee;    
  }

  li:hover {
    background: lightblue;
  }

  button {    
    width: 100px;
    height: 100%;
    /* padding: .5em; */
    font-size: .9em;
    color: white;
    border: none;
    cursor: pointer;
    background: steelblue;
  }
</style>