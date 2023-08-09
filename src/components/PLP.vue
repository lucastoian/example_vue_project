<template>


    <div class="container" style="display: flex; flex-wrap: wrap;">
        <ProductCard v-for="product in this.products.slice(0, 60)" v-model:name="product.name"  v-model:price="product.price" v-model:discount="product.discount" v-model:mpn="product.mpn" v-model:color="product.color" v-model:brandname="product.brandname" v-model:image="product.image" ></ProductCard>
     
    </div>


</template>
    
    
    
    <script>
    import axios from 'axios'
import ProductCard from './ProductCard.vue'








    export default {
    props: {
        genere: String,
        brand: String,
        categoria: String
    },
    


    data() {
        return {
            products: 'empty'
        };
    },watch: {
    // whenever question changes, this function will run
    genere(newGenere, oldGenere) {
        console.log("new genere: " + newGenere + " old genere: " + oldGenere) 
        this.getProducts()
    }
  },
    methods: {
        async getProducts() {
            console.log('https://funloltracker.herokuapp.com/api/v1/products/filter/filtered/by/brandname' + (this.genere!=null ? '?sex=' + this.genere : ''));
            await axios.get('https://funloltracker.herokuapp.com/api/v1/products/filter/filtered/by/brandname' + (this.genere!=null ? '?sex=' + this.genere : '')  ).then((response) => {
                this.products = response['data'];
       
            });
        }
    },
    created(){
        this.getProducts()
    },

    components: { ProductCard}
}
    </script>
    