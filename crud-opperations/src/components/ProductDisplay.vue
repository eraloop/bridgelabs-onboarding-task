<template>
    <div class="container  d-flex justify-content-between align-items-center p-2 m-2">
        <div v-for="i in 3" :key="i" class="">
            <Product/>
        </div>
    </div>
</template>
<script>
import Product from './Product.vue'
   export default{
       components:{
            Product
       },
       data(){
           return{
               
              }
       },
       computed:{
           
        },
       methods:{
           
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
        max-width: 70%;
        /* display: flex; */

    }
</style>