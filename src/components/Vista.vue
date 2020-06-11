<template>
  <section class="src-components-usuarios">
    <div class="jumbotron mt-3">
      <h2>Vista</h2>
      <hr />

      <div>
        <table class="table table-sm">
          <tr class="table-success">
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Dirección</th>
            <th>E-mail</th>
            <th>Teléfono</th>
          </tr>
          <tr class="table-primary" v-for="(usuario, index) in this.$store.state.usuarios" :key="index">
            <td>{{index+1}}</td>
            <td>{{usuario.nombre | pasarAmayuscula}}</td>
            <td>{{usuario.apellido | pasarAmayuscula}}</td>
            <td>{{usuario.edad}}</td>
            <td>{{usuario.direccion}}</td>
            <td>{{usuario.email}}</td>
            <td>{{usuario.telefono}}</td>
          </tr>
        </table>
      </div>
      <hr />
    </div>
  </section>
</template>

<script lang="js">
  import { urlPosts } from '../urlS';
  export default  {
    name: 'src-components-usuarios',
    props: [],
    mounted () {
      this.getAxios()
    },
    data () {
      return {

      }
    },
    methods: {
      getAxios(){
        this.axios.get(urlPosts)
        .then ( res =>{
          this.$store.dispatch('dameUsers', res.data)
          if (this.$store.state.usuarios == 0) {
            alert("No hay usuarios cargados");           
          }
      })
      }
      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-http {
}
.jumbotron {
  background-color: #6699cc;
  color: darkblue;
}

hr {
  background-color: #fff275;
}
</style>

