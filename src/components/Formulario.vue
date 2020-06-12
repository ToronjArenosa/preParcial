<template>
  <section>
    <div id="app" class="container">
      <div class="jumbotron mt-3">
        <h1>Formulario</h1>
        <hr />
        <vue-form :state="formState" @submit.prevent="enviar()">
          <validate>
            <input
              type="text"
              id="descripción"
              class="form-control"
              autocomplete="off"
              name="descripción"
              v-model.trim="formData.descripción"
              placeholder="Descripción"
              required
              min-caracteres
              max-caracteres
            />
            <field-messages name="descripción" show="$dirty">
              <div slot="required" class="alert alert-danger d-inline-block">*Campo Requerido*</div>
              <div
                slot="min-caracteres"
                class="alert alert-info my-1 d-inline-block"
              >La descripción debe tener al menos 10 caracteres</div>
              <div
                slot="max-caracteres"
                class="alert alert-info my-1 d-inline-block"
              >La descripción debe tener como mucho 50 caracteres</div>
            </field-messages>
          </validate>
          <br />
          <validate>
            <input
              type="text"
              id="nombre"
              class="form-control"
              autocomplete="off"
              name="nombre"
              v-model.trim="formData.nombre"
              placeholder="Nombre"
              required
              min-caracteres
              max-caracteres
            />
            <field-messages name="nombre" show="$dirty">
              <div slot="required" class="alert alert-danger d-inline-block">*Campo Requerido*</div>
            </field-messages>
          </validate>
          <br />
          <validate>
            <input
              type="email"
              id="email"
              class="form-control"
              autocomplete="off"
              name="email"
              v-model.trim="formData.email"
              placeholder="E-mail"
              required
              valid-mail
            />
            <field-messages name="email" show="$dirty">
              <div
                style="height: 25px"
                slot="required"
                class="alert alert-danger d-inline-block"
              >*Campo Requerido*</div>
              <div slot="email" class="alert alert-warning my-1 d-inline-block">Email no válido</div>
            </field-messages>
          </validate>
          <button class="btn btn-success my-4" type="submit">Enviar</button>
        </vue-form>
      </div>
      <div>
            <Vista :tareas="tareas" />
      </div>
    </div>
  </section>
</template>

<script lang="js">
  import { urlPosts } from '../urlS';
  import Vista from './Vista.vue'
  export default {
  name: 'src-components-formulario',
  components: {
    Vista
  },
  props: [],
  data() {
    return {
      formState: {},
      formData: this.getInitialData()    ,
              tareas: []
    }
  },
  computed: {

  },
  mounted() {
      this.getAxios()
  },
  methods: {
    getInitialData() {
      return {
        descripción: '',
        nombre: '',
        email: ''
      }
    },
    enviar() {
      console.log(this.formData)
      this.axios.post(urlPosts, this.formData, {
        'content-type' : 'application/json'
      })
      .then(res =>{
        console.log(res.data)
        this.getAxios()
      })
      
      this.formData = this.getInitialData()
      this.formState._reset()
    },
      getAxios(){
        this.axios.get(urlPosts)
        .then ( res =>{
          this.tareas = res.data
      })
      }
  }
}



</script>

<style scoped lang="css">
.src-components-formulario {
}
.jumbotron {
  background-color: #7fc8f8;
  color: #2a2d34;
}

hr {
  background-color: darkblue;
}
.alert-danger {
  font-style: italic;
  font-family: Calibri;
  font-size: small;
  padding: 0;
}

.alert-info {
  font-weight: bold;
  padding: 5px;
}

.alert-warning {
  font-style: oblique;
  padding: 5px;
}
</style>
