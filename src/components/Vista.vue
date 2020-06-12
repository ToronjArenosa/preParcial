<template>
  <section class="src-components-usuarios">
    <div class="jumbotron mt-3">
      <h2>Tareas</h2>
      <hr />
      <div>
        <table class="table table-sm">
          <tr class="table-success">
            <th>ID</th>
            <th>Descripcion</th>
            <th>Nombre</th>
            <th>E-mail</th>
            <th>Creada</th>
          </tr>
          <tr class="table-primary" v-for="(tarea, index) in tareas" :key="index">
            <td>{{index+1}}</td>
            <td>{{tarea.descripcion}}</td>
            <td>{{tarea.nombre}}</td>
            <td>{{tarea.email}}</td>
            <td>{{tarea.createdAt | changeDate}}</td>
          </tr>
        </table>
      </div>
      <hr />
      <h2>Respuestas</h2>
      <br>
      <p>respuestas: 1-c, 2-c, 3-c, 4-b, 5-a, 6-b, 7-d, 8-d, 9-a, 10-b</p>
      <hr />
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-usuarios',
    props: ['tareas'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-http {
}
.jumbotron {
  background-color: #6699CC;
  color: darkblue;
}

hr {
  background-color: #FFF275;
}
</style>

