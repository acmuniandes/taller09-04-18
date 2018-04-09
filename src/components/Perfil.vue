<template>
  <div>
    <img v-on:click="updateName = !updateName" :src="imagen">
    <div v-if="updateName">
      <input v-model="nuevoNombre" placeholder="Ingresa tu nuevo nombre...">
      <button v-on:click="updateNameFunc()">Actualizar</button>
    </div>
    <h2>{{nombre}}</h2>
  </div>
</template>

<script>
export default {
  name: "Perfil",
  data: function() {
    return {
      nombre: "",
      nuevoNombre: "",
      imagen: "",
      id: "",
      updateName: false
    };
  },
  methods: {
    updateNameFunc: function(){
      const nuevoDoc = {
        nombre: this.nuevoNombre,
        imagen: this.imagen
      }
      db.collection("usuarios").doc(this.id).set(nuevoDoc).then(doc=>{console.log('Se actualizó!')});
    }
  },
  mounted: function() {
    db
      .collection("usuarios")
      .where("nombre", "==", this.$route.params.usuario)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(`${doc.id} => ${doc.data().nombre}`);
          this.id = doc.id;
          this.nombre = doc.data().nombre;
          this.imagen = doc.data().imagen;
        });
      });
  }
};
</script>

<style>
img{
  height: 150px;
  width: 150px;
  border-radius: 75px;  
}
</style>
