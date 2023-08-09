<template>

    <h1 v-if="this.genere === 'M'">Articoli Uomo</h1>
    <h1 v-else-if="this.genere === 'F'">Articoli Donna</h1>
    <h1 v-else-if="this.brand != null">Collezione {{ this.brand }}</h1>
    <h1 v-else-if="this.categoria != null ">{{ this.categoria }}</h1>
    <h1 v-else>Collezione cataldostore</h1>
    
    <div class="container" style="display: flex; flex-wrap: wrap;">
        <ProductCard v-for="product in this.products.slice(0, 60)" v-model:name="product.name"  v-model:price="product.price" v-model:discount="product.discount" v-model:mpn="product.mpn" v-model:color="product.color" v-model:brandname="product.brandname" v-model:image="product.image" ></ProductCard>
     
    </div>


</template>
    
    
    
    <script>
    import axios from 'axios'
import ProductCard from './ProductCard.vue'








    export default {
    props: {
       
    },
    


    data() {
        return {
            products: 'empty',
            genere: null,
            brand: null,
            categoria: null
        };
    },watch: {
    // whenever question changes, this function will run
    genere(newGenere, oldGenere) {
        console.log("new genere: " + newGenere + " old genere: " + oldGenere) 
        this.getProducts()
    }
  },
    methods: {
        getParams() {

            let queryString = window.location.search;
            let urlParams = new URLSearchParams(queryString);

            if( urlParams.has('genere') ){
                this.genere = urlParams.get('genere').toUpperCase();
            } 
            if( urlParams.has('brand') ){
                this.brand = urlParams.get('brand');
            } 
            if( urlParams.has('category') ){
                this.categoria = urlParams.get('category');
            }

    


        },
        async getProducts() {
            console.log('https://funloltracker.herokuapp.com/api/v1/products/filter/filtered/by/brandname' + (this.genere!=null ? '?sex=' + this.genere : ''));

            if(this.genere != null){
                    await axios.get('https://funloltracker.herokuapp.com/api/v1/products/filter/filtered/by/brandname' + (this.genere!=null ? '?sex=' + this.genere : '')  ).then((response) => {
                    this.products = response['data'];
        
                });
            }

            else if(this.brand != null){
                await axios.get('https://funloltracker.herokuapp.com/api/v1/products/filter/filtered/by/brandname?brands=' + this.brand   ).then((response) => {
                    this.products = response['data'];
                });
            }

            else if(this.categoria != null){
                await axios.get('https://funloltracker.herokuapp.com/api/v1/products/filter/filtered/by/brandname?category=' + this.categoria   ).then((response) => {
                    this.products = response['data'];
                });
            }
            else{
                await axios.get('https://funloltracker.herokuapp.com/api/v1/products/filter/filtered/by/brandname').then((response) => {
                    this.products = response['data'];
                });
            }

       
          
        }
    },
    created(){
        this.getParams()
        this.getProducts()
    },

    components: { ProductCard}
}
    </script>
    