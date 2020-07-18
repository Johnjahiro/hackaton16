<template>
  <div class="posts">
    <h1>Lista de posts</h1>    
    <ul>
      <li v-for="post in posts" :key="post.id">{{post.title}}<button>Ver más</button></li>            
    </ul>
  </div>  
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
  name: 'PostsList',
  computed: {
    ...mapState(['posts'])
  },
  methods: {
    ...mapActions(['getPosts'])
  },
  created() {
    this.getPosts()
  },
}

</script>

<style scoped>
  .posts {
    margin: 1em auto;
    width: 50%;
    /* margin-top: 2em; */    
    text-align: center;    
  }

  h1 {
    margin: 1.3em;
    color: teal;
    font-size: 2.5em;
  }

  ul {
    list-style: none;
    /* border: 1px solid #cecece; */
  }

  li {
    /* margin-top: 5px; */
    display: flex;
    /* padding: 1em; */
    justify-content: space-between;
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

  button:hover {
    background: darkcyan;
  }
</style>