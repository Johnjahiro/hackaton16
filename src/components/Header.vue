<template>
  <div>
    <header>
      <img width="60" height="60" src="@/assets/logo.png" alt="">
      <nav>
        <ul>          
          <router-link to="/"><li>Home</li></router-link>
          <router-link to="/users"><li>Usuarios</li></router-link>
          <router-link to="/posts"><li>Posts</li></router-link>
          <router-link to="/albums"><li>Albums</li></router-link>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>

export default {
  name: 'Header'  
}
</script>

<style scoped>
  header {
    background: #fafafa;
    height: 80px;
    display: flex;
    padding: 0 1em;
    justify-content: space-between;
    align-items: center;    
    box-shadow: 0 0 3px #000;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    width: 100%;
    height: 100%;
  }  

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;    
    height: 100%; 
  }

  li {    
    border-left: 1px solid #cecece;    
    cursor: pointer;
    height: 100%; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-weight: bold; */
    font-size: 1.3em;
  }

  li:hover {
    background: steelblue;
    color: white;
  }

  nav {
    width: 45%;       
    height: 100%; 
  }

</style>