import Vue from 'vue'
import VueForm from 'vue-form'

var options = {
  validators: {
    'min-caracteres': function (value) {
      return 5 <= value.length
    },
    'max-caracteres': function (value) {
      return 15 >= value.length
    },
    'valid-mail': function (value) {
      var pattern = new RegExp ("@tp.ort");
      return (value == "") ? "" : (pattern.test(value));
    },
    'valid-phone': function (value) {
      var pattern = new RegExp ("05415");
      return (value == "") ? "" : (pattern.test(value));
    }
  }
}

 Vue.use(VueForm, options)
  
  