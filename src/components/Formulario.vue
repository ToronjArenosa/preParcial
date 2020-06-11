<template>

 <section>
  <div id="app" class="container">
    <div class="jumbotron mt-3">
      <h1>Formulario</h1>
      <hr>
      <vue-form :state="formState" @submit.prevent="enviar()">
        <validate>
          <input type="text" id="nombre" class="form-control" autocomplete="off" name="nombre"
            v-model.trim="formData.nombre" placeholder="Nombre" required min-caracteres max-caracteres>
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger d-inline-block">*Campo Requerido*</div>
            <div slot="min-caracteres" class="alert alert-info my-1 d-inline-block">El nombre escrito debe tener al menos 5 caracteres</div>
            <div slot="max-caracteres" class="alert alert-info my-1 d-inline-block">El nombre escrito debe tener como mucho 15 caracteres</div>
          </field-messages>
        </validate><br>
           <validate>
          <input type="text" id="apellido" class="form-control" autocomplete="off" name="apellido"
            v-model.trim="formData.apellido" placeholder="Apellido" required min-caracteres max-caracteres>
          <field-messages name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger d-inline-block">*Campo Requerido*</div>
            <div slot="min-caracteres" class="alert alert-info my-1 d-inline-block">El apellido escrito debe tener al menos 5 caracteres</div>
            <div slot="max-caracteres" class="alert alert-info my-1 d-inline-block">El apellido escrito debe tener como mucho 15 caracteres</div>
          </field-messages>
        </validate><br>
        <validate>
          <input type="number" id="edad" class="form-control" autocomplete="off" name="edad"
            v-model.trim="formData.edad" placeholder="Edad" required min="18" max="120">
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger d-inline-block">*Campo Requerido*</div>
            <div slot="min" class="alert alert-info my-1 d-inline-block">La edad mínima es de 18</div>
            <div slot="max" class="alert alert-info my-1 d-inline-block">La edad máxima es de 120</div>
          </field-messages>
        </validate><br>
           <validate>
          <input type="text" id="direccion" class="form-control" autocomplete="off" name="direccion"
            v-model.trim="formData.direccion" placeholder="Dirección" required min-caracteres max-caracteres>
          <field-messages name="direccion" show="$dirty">
            <div slot="required" class="alert alert-danger d-inline-block">*Campo Requerido*</div>
          </field-messages>
        </validate><br>
        <validate>
          <input type="email" id="email" class="form-control" autocomplete="off" name="email"
            v-model.trim="formData.email" placeholder="E-mail" required valid-mail>
          <field-messages name="email" show="$dirty">
            <div style="height: 25px" slot="required" class="alert alert-danger d-inline-block">*Campo Requerido*</div>
            <div slot="valid-mail" class="alert alert-warning my-1 d-inline-block">El mail debe pertenecer al dominio "tp.ort"</div>
          </field-messages>
        </validate><br>
           <validate>
           <input type="number" id="telefono" class="form-control" autocomplete="off" name="telefono"
            v-model.trim="formData.telefono" placeholder="Teléfono" required valid-phone>
          <field-messages name="telefono" show="$dirty">
            <div slot="required" class="alert alert-danger d-inline-block">*La característica solicitada es INEXISTENTE*</div>
            <div slot="valid-phone" class="alert alert-warning my-1 d-inline-block">El numero de Teléfono debe ser de Buenos Aires, Argentina (05415)</div>
          </field-messages>
        </validate><br>
        <button class="btn btn-success my-4" :disabled="formState.$invalid" type="submit">Enviar</button>
      </vue-form>
    </div>
  </div>
</section>

</template>

<script lang="js">
  import { urlPosts } from '../urlS';
  import axios from 'axios'
  export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data() {
    return {
      formState: {},
      formData: this.getInitialData()    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    getInitialData() {
      return {
        nombre: '',
        apellido: '',
        edad: '',
        direccion: '',
        email: '',
        telefono: ''
      }
    },
    enviar() {
      console.log(this.formData)
      axios.post(urlPosts, this.formData, {
        'content-type' : 'application/json'
      })
      .then(res =>{
        console.log(res.data)
      })
      this.formData = this.getInitialData()
      this.formState._reset()
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
