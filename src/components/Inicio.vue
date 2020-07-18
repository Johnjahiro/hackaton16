<template>
  <div class="home">
    <h1>Desarrollo Hackaton #16</h1>
    <p class="description">Para el desarrollo de este proyecto se emplearon las siguientes tecnologías:</p>
    <div class="grid">
      <img width="150" height="150" src="@/assets/vsc.png" alt="">
      <p>Visual Studio Code es un editor de código fuente ligero pero potente que se ejecuta en el propio ordenador y que está disponible para los sitemas operativos más importantes, es decir,  Windows, macOS y Linux. Viene con soporte incorporado para las siguientes tecnologías: JavaScript, TypeScript y Node.js y tiene la posibilidad de añadir extensiones para otros lenguajes (como C ++, C #, Python, PHP, Go) y runtimes (como .NET y Unity).</p>
    </div>
    <div class="grid">
      <img width="150" height="150" src="@/assets/logo.png" alt="">
      <p>Es un Framework creado sobre Javascript, es decir el lenguaje de programación que lo soporta es Javascript, nos sirve para crear interfaces para la vista Frontend o la vista que los usuarios verán de tu proyecto. Vue JS se caracteriza por trabajar bajo el patrón llamado MVVM que significa Model View – View Model, este patron simplifica el desarrollo de interfaces impulsados por eventos.</p>
    </div>
    <div class="grid">
      <img width="150" height="150" src="@/assets/vuex.png" alt="">
      <p>Vuex es una librería para gestión del estado (State Management) de aplicaciones Vue.js. Sirve como un almacén centralizado para todos los componentes de una aplicación Vue, con reglas que garantizan que el estado se puede cambiar de manera predecible. También se integra con la extensión devtools oficial de Vue para proporcionar funciones avanzadas como la depuración y snapshots</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inicio'
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-size: 2.5em;
    color: teal;
  }

  .home {
    margin: 2em auto;    
    width: 70%;
    /* margin-top: 2em; */    
    text-align: center;    
  }

  .description {
    margin: 1em;
    font-weight: bold;    
    margin-bottom: 4em;
  }

  .grid {
    width: 50%;
    margin: 2em auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;    
    align-items: center;
    padding-bottom: 1em;
    border-bottom: 1px solid #cecece;
  }

  .grid p {
    text-align: justify;
  }
</style>
