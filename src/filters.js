import Vue from 'vue'

Vue.filter('pasarAmayuscula', function(value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
})
