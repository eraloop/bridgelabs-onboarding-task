<template>
     <div class="container d-flex-column justify-content-center align-items-center m-auto p-5">
        <div class="row">
            
            <div class="col-lg-8">
                <h4>Welcome Mr {{userData.name}}</h4>
                <p>We are very happy you choose our servicess.</p>

                <section>
                    <h5>Please verify some of these information: </h5>
                    <p>
                        <span>Email: </span><span>{{userData.email}}</span>
                    </p>
                    <p>
                        <span>Name: </span><span>{{userData.last_name}}</span><span>{{userData.first_name}}</span>
                    </p>
                </section>
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
            userData (){
               return this.$store.getters.get_user_data
           }
        },
       methods:{
           
       },
       mounted: function(){
            this.userData
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