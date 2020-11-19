import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isUserLogin: false
    },
    mutations: {
        updateState(state, payload) {
            state.isUserLogin = payload
        }
    },
    getters: {
        isUserLogin: state => {
            state.isUserLogin;
            // console.log(state.isUserLogin)
        } 
    },
    actions: {
        updateState({commit}, payload){
            commit("updateState",payload)
        }
    }
});