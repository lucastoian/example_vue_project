<template>


   
   
     <div class="col">
        <a :href="'https://www.cataldostore.it/' +  this.name  + '/' + this.mpn + '/' + this.color" target="_blank">
            <img :src="this.image" width="300" height="400" style="object-fit: cover;">

                <p class="m-0">{{ this.name }}</p>

                <p> <span style="text-decoration: line-through; color: rgb(255, 0, 0);">{{ this.price}}€</span> <span style="color: green; font-size: 26px;">{{ (this.price - this.discount )}}€</span></p>
        </a>

       

     </div>
   


</template>
    
    
    
    <script>
 








    export default {

      props: {
        name: String,
        price: Number,
        discount: Number,
        mpn: String,
        color: String,
        brandname: String,
        image: String
      },
      data(){
        return{
        
        }
      },
      methods: {
  
        }
        ,watch: {
    // whenever question changes, this function will run
    name(newName, oldName) {
        console.log("new name: " + newName + " old name: " + oldName) 
      
    }
  },
      mounted () {
    
        }
    }
    </script>

    <style>
        a{
            text-decoration: none !important;
            color: black !important;
        }
    </style>
    