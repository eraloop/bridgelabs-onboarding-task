/* eslint-disable */
<template>
    <div class=" navbar container align-items-center p-4">
        <h3>logo</h3>

       <div class="d-flex justify-content-between align-items-center ">
            <button 
            class="btn btn-secondary mr-4"
             @click.prevent="NavProd"
            >  
                Products
            </button>
            <button 
            class="btn btn-primary"
            @click.prevent="NavAddProd"
            >
                Add Products
            </button>
       </div>

    </div>
</template>
<script>
import router from "../router"

   export default{
       components:{
            
       },
       data(){
           return{
               
              }
       },
       computed:{
           
        },
       methods:{
           NavAddProd(){
               router.push("./addproducts")
           },

            NavProd(){
               router.push("./productlist")
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
    .navbar{
        color: #2c3e50;
        border-bottom: 1px  solid #2c3e50;
        /* border-radius: 10px; */
    }


</style>
