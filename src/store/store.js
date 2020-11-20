import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isUserLogin : localStorage.getItem("loginStatus"),
        loggedInUser :localStorage.getItem("loggedInUserName")
    },
    mutations: {
        updateState(state, payload) {
            state.isUserLogin = payload.loginStatus,
            state.loggedInUser = payload.userName
            console.log(state.isUserLogin)
        }
    },
    getters: {
        isUserLogin: state => {
            state.isUserLogin;
            state.loggedInUser;
             console.log(state.isUserLogin)
        } 
    },
    actions: {
        updateState({commit}, payload){
            commit("updateState",payload)
            
        }
    }
});