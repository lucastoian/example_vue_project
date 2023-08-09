<template>
<p>preferiti</p>
    <div class="container" style="display: flex; flex-wrap: wrap;">
        <ProductCard v-for="product in this.preferiti" v-model:name="product.name"  v-model:price="product.price" v-model:discount="product.discount" v-model:mpn="product.mpn" v-model:color="product.color" v-model:brandname="product.brandname" v-model:image="product.image" ></ProductCard>
     
    </div>


</template>



<script>
import ProductCard from './ProductCard.vue'
export default {
  name: 'Preferiti',

  data(){
    return{
        preferiti: this.$cookies.get('favourites')
    }
  },
  afterMount(){
    this.preferiti = this.$cookies.get('favourites')
    console.log("preferiti: " + this.preferiti)
  },
  methods:{
     
  },
  components:{
    ProductCard
  }
}
</script>
