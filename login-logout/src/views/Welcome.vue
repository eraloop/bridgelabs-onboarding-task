<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center p-3 bg-primary p-3 d-block  w-100 text-white">
            <h1>
                logo
            </h1>
            <ul class="d-flex justify-content-around align-items-center">
                <li>
                    link1
                </li>
                 <li>
                    link1
                </li>
                 <li>
                    link1
                </li>
            </ul>
            <ul class="d-flex justify-content-around align-items-center ">
               <div  v-if="isLoggedIn" class="d-flex justify-content-between align-item-center ">
                    <li >
                        {{userData.name || "test user"}} 
                    </li>
                    <button
                        @click="LogoutUser"
                        v-if="isLoggedIn"
                        >
                        Logout
                    </button>
               </div>

                <router-link  v-else-if="!isLoggedIn" to="/">Login</router-link>

            </ul>
        </div>
        <welcome/>
    </div>
</template>
<script>
import welcome from "../components/Welcome.vue"
// import router from "../router"
   export default{
       components:{
           welcome 
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
            //    router.push("/welcome")
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
</style>