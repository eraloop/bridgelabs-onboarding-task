<template>
   <div class="container">
       <h2>this is the index</h2>
       <ProductDisplay/>
   </div>
</template>
<script>
import ProductDisplay from "../components/ProductDisplay.vue";
   export default{
       components:{
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