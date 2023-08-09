<template>




<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://localhost:8081/">
    <img src="./../assets/logo.svg" width="60" height="60" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link" href="http://localhost:8081/?genere=M">Uomo</a>
        </li>
      <li class="nav-item">
        <a class="nav-link" href="http://localhost:8081/?genere=F">Donna</a>
      </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Brands
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-for="brand in brands"><a class="dropdown-item" :href="'http://localhost:8081/?brand=' + brand.name ">{{ brand.name }}</a></li>
            
          </ul>

        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorie
          </a>
      
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-for="category in categories"><a class="dropdown-item" :href="'http://localhost:8081/?category=' + category.name " >{{ category.name }}</a></li>
            
          </ul>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="http://localhost:8081/preferiti">Preferiti</a>
      </li>
      </ul>

    </div>
  </div>
</nav>

</template>



<script>
import axios from 'axios'
export default {
  name: 'Navbar',
  props: {
    msg: String
  },
  data(){
    return{
        brands: null,
        categories:null
    }
  },
  created(){
    this.getBrands()
    this.getCategories()
  },
  methods:{
       getBrands() {
            axios.get('https://funloltracker.herokuapp.com/api/v1/brands' ).then((response) => {
                this.brands = response['data'];
       
            });
        },
        getCategories() {
            axios.get('https://funloltracker.herokuapp.com/api/v1/categories' ).then((response) => {
                this.categories = response['data'];
                console.log(JSON.stringify(response))
       
            });
        }
  }
}
</script>
