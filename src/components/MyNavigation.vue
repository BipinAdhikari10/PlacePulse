<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">PlacePulse</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/" class="nav-link">All Places</b-nav-item>
        <b-nav-item v-if="isAuthenticated " to="/myplace" class="nav-link">My Place</b-nav-item>
        <b-nav-item v-if="!isAuthenticated" to="/addplace" class="nav-link">Add Place</b-nav-item>
        
        <b-nav-item v-if="!isAuthenticated" to="/register" class="nav-link">Signup</b-nav-item>
        <b-nav-item v-if="!isAuthenticated" to="/login" class="nav-link">Login</b-nav-item>
        <b-nav-item v-if="isAuthenticated" to="/login" @click="logout" class="nav-link">Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MyNavigation',
  computed: {
    ...mapState({
      isAuthenticated: (state) => state.isAuthenticated,
    }),
  },
  methods: {
    ...mapActions(['logout']),
  },
};
</script>

<style>
.ml-auto {
  margin-left: auto !important;
  font-size: 20px;
}

.nav-link {
  color: #fff !important;
}

.nav-link:hover {
  color: #f8f9fa !important;
}
</style>






<!-- <template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">  
      <div class="logo">Home</div>
      <div class="right">
   
     
      <b-navbar-brand to="/home">All Places</b-navbar-brand>
      <b-navbar-brand v-if="isAuthenticated" to="/">My place</b-navbar-brand>
      <b-navbar-brand v-if="isAuthenticated" to="/add-place">Add Place</b-navbar-brand>
      <b-navbar-brand v-if="!isAuthenticated" to="/">signup</b-navbar-brand>
      <b-navbar-brand v-if="!isAuthenticated" to="/login">Login</b-navbar-brand>
      <b-navbar-brand @click="logoutHandler" v-if="isAuthenticated">logout</b-navbar-brand>
  </div>
       
    </b-navbar>
  </div>
  </template>
  <script>
  // import { mapGetters } from 'vuex'; //vuex object vhitra
  export default
   
  {
      name:"NavBar",
      computed:{
    // isAuthenticated(){
    //   return this.$store.getters.isAuthenticated
    // },
    // userEmail(){
    //   return this.$store.getters.userEmail
    // }
    token(){
      return this.$store.token
    }
    },
   
  // computed:{
  //   ...mapGetters([
  //       'isAuthenticated', // maps to this.$store.getters.isAuthenticated
  //       'userEmail' // maps to this.$store.getters.userEmail
  //     ])
   
    // ...mapGetters({
    //   isAuthenticated:'isAuthenticated',
    //   myEmail:'userEmail'
    // })
   
  methods:{
    logoutHandler(){
      this.$store.commit('clearData')
      this.$router.push('/')
    }
  }
      }
   
   
   
  </script>
  <style>
  .right{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-left: 55%;
  }
  .logo{
  color: white;
  font-size: 40px;
  }
  </style>
  has context menu -->