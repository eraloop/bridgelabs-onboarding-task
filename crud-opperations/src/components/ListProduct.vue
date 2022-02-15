<template>
    <div class="container">
        <div class="content d-flex justify-content-between align-items-center p-2">
            <div class="name">
                <h5>biscuit</h5>
            </div>
            <div class="actions">
                <button 
                class="btn btn-secondary mr-4"
                @click.prevent="editProduct"
                >edit</button>
                <button 
                class="btn btn-danger"
                @click.prevent="deleteProduct"
                >delete</button>
            </div>
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