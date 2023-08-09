<template>


   
   
     <div class="col-auto m-2" style="position: relative;">
      <v-hover v-slot="{ hover }">
      <v-btn icon="mdi-heart" size="x-large" density="compact"  rounded="0" class="icona" variant="plain" @click="addToFavorite()" :style="this.isFavourite ? 'color:red !important' : 'color:white !important'"  ></v-btn>
      </v-hover>
        <a :href="'https://www.cataldostore.it/' +  this.name  + '/' + this.mpn + '/' + this.color" target="_blank" >


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
            isFavourite: false
        }
      },
      methods: {
            checkIfIsFavourite(){
              let favourites = this.$cookies.get('favourites')
              favourites.forEach(e => {
                  if(e['mpn'] == this.mpn && e['color'] == this.color){
                      this.isFavourite = true;
                      return;
                  }
              });
            },
            addToFavorite(){
              let favourites = this.$cookies.get('favourites')
              console.log(favourites)



              for(let i = 0; i<favourites.length; i++){
                if(favourites[i]['mpn'] == this.mpn && favourites[i]['color'] == this.color){
                      this.isFavourite = false;
                      favourites.splice(i,1)
                      this.$cookies.set('favourites', favourites)
                      this.$emit('preferiti')
                      return;
                  }
              }
 

   
                  favourites.push({'mpn':this.mpn, 'color': this.color, 'name':this.name,'price':this.price,'discount':this.discount,'brandname':this.brandname,'image':this.image})
                  this.$cookies.set('favourites', favourites)
                  this.checkIfIsFavourite()
            }
        }
        ,watch: {
    // whenever question changes, this function will run
    name(newName, oldName) {
        console.log("new name: " + newName + " old name: " + oldName) 
        this.checkIfIsFavourite()
      
    }
  },
      beforeMount () {
        this.checkIfIsFavourite()
        }
    }
    </script>

    <style>

        a{
            text-decoration: none !important;
            color: black !important;
        }

        .icona{
          position: absolute; left: 0; z-index: 99; background-color: rgba(240, 248, 255, 0) !important;
          background-color: #faebd736 !important;
        }
        .icona:hover{
          background-color: #faebd736 !important;
        }
        .v-btn--elevated:hover{
          background-color: #faebd736 !important;
        }
    </style>
    