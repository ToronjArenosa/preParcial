import Vue from 'vue'

Vue.filter('changeDate', function(value) {
    let date = value.substr(8,2)+"/"+value.substr(5,2)+"/"+value.substr(0,4)+" "+value.substr(11,8)
    return date
})
