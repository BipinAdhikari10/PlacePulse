import Vue from "vue";
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex)

const store=new Vuex.Store({

    state:{
        isAuthenticated:false,
        userId:'',
        userEmail:"",
        token:"",

    },
  
    getters:{
        isAuthenticated:(state)=>state.isAuthenticated,
        token:(state)=>state.token,
        userId:(state)=>state.userId,
        userEmail:(state)=>state.userEmail,

    },
    mutations: {
        setUserData(state, userData) {
          state.token = userData.token;
          state.userId = userData.userId;
          state.userEmail = userData.email;
          state.isAuthenticated=true
        },
        clearUserData(state) {
          state.token = null;
          state.userId = null;
          state.userEmail= null;
          state.isAuthenticated=false
        }
    },
    plugins: [createPersistedState()],
})
export default store