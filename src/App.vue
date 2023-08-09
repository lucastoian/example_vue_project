<template>
  <div class="container">
  
  <Navbar></Navbar>

  <router-view></router-view>
</div>

  
</template>

<script>

import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar
  },
  created(){

  },
  data() {
        return {
           
        };
    },
  methods:{

   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  text-align: left;
  padding-top: 40px;
}
</style>
