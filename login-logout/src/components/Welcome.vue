<template>
     <div class="container d-flex-column justify-content-center align-items-center m-auto p-5">
            <div class="content">
                <h4>Welcome Mr {{userData.name}}</h4>
                <p>We are very happy you choose our servicess.</p>

                <section class="basic-info">
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
    .content{
        height: 40%;
        width: 90%;
        padding: 4em;
        border-radius: 10px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        
    }
    .basic-info{
        padding: 10px 0;
    }
</style>