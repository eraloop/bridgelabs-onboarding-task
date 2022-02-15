<template>
    <div class="container">
        <h3 class="text-center">Products</h3>
         <div v-for="i in 6" :key="i">
             <DisplayProduct/>
         </div>
    </div>
</template>
<script>
import DisplayProduct from "../components/DisplayProduct.vue"
   export default{
       components:{
            DisplayProduct
        },
       data(){
           return{
               
              }
       },
       computed:{
           
        },
       methods:{
           deleteProduct(){

           },

           editProduct(){

           }
           
       },
       mounted: function(){
            
       }
    }
</script>
<style scoped> 
   *{
        padding: 0;
        margin: 0;
        box-sizing:border-box;
    }
    .container{
        max-width: 60%;
    }
    .content{
        border-bottom: 1px solid #2c3e50;
        border-top: 1px solid #2c3e50;

    }
</style>
