<template>
  <div>
    <footer>
      <nav>
        <ul>          
          <li>Youtube</li>
          <li>Instagram</li>
          <li>Twiteer</li>
          <li>Facebook</li>
        </ul>
      </nav>
      <p>2020 derechos reservados</p>
    </footer>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'Footer'
}
</script>

<style scoped>
  footer {
    position: fixed;    
    bottom: 0;
    padding: 1.5em 0;
    height: 100px;
    background: indianred;
    width: 100%;
    /* margin-top: 2em; */
    display: flex;
    flex-direction: column;
    justify-content: center;    
    align-items: center;    
    color: white;
  }

  nav {
    width: 40%;
  }
  ul {        
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    font-weight: bold;
  }

  li {
    cursor: pointer;
  }

  li:hover {
    color: indigo;
  }

  p {
    margin-top: 20px;
  }
</style>