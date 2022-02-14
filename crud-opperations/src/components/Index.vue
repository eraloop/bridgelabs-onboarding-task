<template>
    <div class="container">
        <Navbar/>
        <ProductDisplay/>
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import ProductDisplay from './ProductDisplay.vue'
   export default{
       components:{
            Navbar,
            ProductDisplay
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
</style>