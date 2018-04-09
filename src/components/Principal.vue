<template>
  <div>
    <h1>¡Hola!</h1>
    <input v-model="user" placeholder="Ingresa tu nombre"/>
    <button v-on:click="logIn()"> Ingresar </button> 
    <button v-on:click="register()"> Registrarse </button>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>

<script>
export default {
  name: "Principal",
  data: function() {
    return {
      user: "",
      errorMessage: null
    };
  },
  methods: {
    logIn: function() {
      db
        .collection("usuarios").where('nombre', '==', this.user)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(`${doc.id} => ${doc.data().nombre}`);
            this.$router.push('usuarios/' + doc.data().nombre);
          });
        });
    },
    register: function() {}
  },
  mounted: function() {}
};
</script>

<style>

</style>
