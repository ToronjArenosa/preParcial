import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        usuarios: []
        },
    actions : {
        dameUsers({commit}, users) {
            commit('getUsuarios', users)
        }
    },
    mutations : {
        getUsuarios(state, newUsers) {
            state.usuarios = newUsers
        }
    }
})