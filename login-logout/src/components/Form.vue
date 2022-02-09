<template>
    <div class="container d-flex-column p-2 m-2 " >
        <div class="d-flex p-4 m-3 justify-content-center align-items-center ">
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
        </div>
        <div class="form">
           <h1>This is the form component</h1>
        </div>
    </div>
</template>
<script>
   export default{
       components:{
            
       },
       props:{
           
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