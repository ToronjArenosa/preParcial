import Vue from 'vue'
import VueForm from 'vue-form'

var options = {
  validators: {
    'min-caracteres': function (value) {
      return 10 <= value.length
    },
    'max-caracteres': function (value) {
      return 50 >= value.length
    },
    
  }
}

 Vue.use(VueForm, options)
  
  