<template>
  <div class="container">
  
  <Navbar></Navbar>
 <h1 v-if="this.genere === 'M'">Articoli Uomo</h1>
 <h1 v-else-if="this.genere === 'F'">Articoli Donna</h1>
 <h1 v-else>Collezione cataldostore</h1>
  <PLP :genere="this.genere"></PLP>

</div>

  
</template>

<script>

import Navbar from './components/Navbar.vue'
import PLP from './components/PLP.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    PLP
  },
  created(){
   this.getParams()
  },
  data() {
        return {
            genere: null
        };
    },
  methods:{
    getParams() {

            let queryString = window.location.search;
            let urlParams = new URLSearchParams(queryString);
            
            if( urlParams.has('genere') ){
                this.genere = urlParams.get('genere').toUpperCase();
            } 

            console.log("genere getParams: " + this.genere)
            
           
        }
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
