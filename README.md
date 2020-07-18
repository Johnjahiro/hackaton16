¿Qué es VUEX?

Vuex es un patrón de gestión de estado basado en la arquitectura singleton que nos permite tener los datos centralizados y accesibles en cualquier componente dentro de la aplicación pero sin que puedan ser modificados sin algun control

ventajas
- Nos permite la comunicación directa con los componentes. Al ser un store global, permite que sus componentes puedan acceder a ella de forma directa.
- Te permite tener más organizada la estructura del proyecto, y por lo tanto lo hace más mantenible y escalable
- Es progresivo

desventajas
- Alarga el tiempo empleado en el desarrollo del proyecto
- 

¿Cuáles son los principales conceptos de VUEX y ejemplificarlos?

El principal concepto es que toda la data esta centralizada en el store y se maneja con los siguientes objetos:

State : Este va a contener todos los datos compartidos por la aplicación. Adicional, cada componente puede tener su propio estado.

state: {
  contador: 0,
  frutas: []
}

Se llamaría a través de un componente de la siguiente forma:

computed: {
  contador() {
    return this.$store.state.contador
  }
}

o mapeándolo usando ...mapState(['contador'])

Mutations: Estas nos van a permitir cambiar el estado. Son practicamente funciones

mutations: {
  aumentar(state, cantidad) {
    state.contador += cantidad
  }
}

Para acceder a esta mutación desde otro componente se mapería de la siguiente forma: ...mapMutations(['aumentar'])

Actions: Esta es una accion que de alguna forma compromete a una mutación. Cambia el estado a través de una mutación y permite la ejecución de las operaciones asíncronas.

actions: {
  aumentarContador() {
    setTimeout(() => {
      commit('aumentar', 2)
    }
  }
}

Para acceder a esta mutación desde otro componente se mapería de la siguiente forma: ...mapActions(['aumentarContador'])

¿Por qué y para qué se necesitaria utilizar un administrador de estados?

Se necesitaría usar vuex porque el estado completo de un proyecto en desarrollo se puede representar en un solo lugar, lo que hace que la aplicación esté más organizada. Esto con el fin de usar solo las requeridas en distintos componentes, lo que hace que sea más sencillo de darte un sentido sobre el rol de dicho componente.

