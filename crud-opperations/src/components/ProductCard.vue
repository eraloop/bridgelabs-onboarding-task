/* eslint-disable */
<template>
    <div class="container">
        <div class="card m" style="width: 18rem;">
            <!-- <img class="card-img-top" src="" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div> -->
            <p>
                {{products}}
            </p>
        </div>
    </div>
</template>
<script>
   export default{
       components:{
            
       },
       data(){
           return{
               
            }
       },
       computed:{
           products(){
               return this.$store.getters.getProducts
           }
        },
       methods:{
           
       },
       mounted: function(){
            this.products()
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