<template>
  <div id="app">
    <my-navigation/>
    <router-view></router-view>
   
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
// import RegisterUser from './components/RegisterUser.vue';
import MyNavigation from './components/MyNavigation.vue';
export default {
  name: 'App',
  components: {
    // RegisterUser,
    MyNavigation,
    RouterView,
   
    
  }
}
</script>

<style>

</style>
