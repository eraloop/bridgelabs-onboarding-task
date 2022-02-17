<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center p-3 bg-primary p-3 d-block  w-100 text-white">
            <h3>
                LoggedIn
            </h3>

            <ul class="d-flex justify-content-around align-items-center ">
               <div  v-if="isLoggedIn" class="d-flex justify-content-between align-item-center ">
                    <li  class="pr-5 mr-3">
                        {{userData.name || "test user"}} 
                    </li>
                    <button
                        @click.prevent="LogoutUser"
                        v-if="isLoggedIn"
                        class="btn btn-dark"
                        >
                        Logout
                    </button>
               </div>

                <router-link  v-else-if="!isLoggedIn" to="/">Login</router-link>

            </ul>
        </div>

        <Welcome/>
    </div>
</template>
<script>
import Welcome from "../components/Welcome.vue"
import router from "../router"
   export default{
       components:{
           Welcome 
       },
       data(){
           return{
               
              }
       },
       computed:{
           userData(){
               return this.$store.getters.get_user_data
           },
           isLoggedIn(){
               return this.$store.getters.get_token
           }
        },
       methods:{
           LogoutUser(){
               this.$store.dispatch("logout")
               router.push("/")
           },
       },
       mounted: function(){
            this.userData
            this.isLoggedIn
       }
    }
</script>
<style scoped> 
   *{
        padding: 0;
        margin: 0;
        box-sizing:border-box;
    }
    ul{
        text-decoration: none;
        list-style: none;

    }
    a{
        color: #fff
    }
    .container{
        height: 100vh;
        width: 100%;
    }
</style>