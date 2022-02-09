<template>
    <div>
        <div class="p-4 m-3 justify-content-center align-items-center ">
            <button class="mr-4  pr-4" @click.prevent="Login">Login</button>
            <button class="ml-4 pl-4" @click.prevent="Register">Register</button>
        </div>

        <form action="" >

            <div class="name container justify-content-between  m-auto p-auto">
              <div class="row">
                <div class="firstname col-lg-6 d-flex-column justify-content-center">
                    <label for="firstname">First Name</label>
                    <input v-model="FormData.fname" class="input-box shadow-lg bg-white rounded" type="text" name="firstname" >
               </div>
               <div class="lastname  col-lg-6 d-flex-column justify-content-center m-auto p-auto">
                    <label for="lastname">Last Name</label>
                    <input v-model="FormData.lname" class="input-box shadow-lg bg-white rounded" type="text" name="lastname" >
               </div>
              </div>
            </div>

            <div v-if="login" class="email column d-flex-column justify-content-center m-auto p-auto">
                <label for="email">Email</label>
                <input  v-model="FormData.email"  class="input-box shadow-lg bg-white rounded" type="email" name="email" >
            </div>

            <div class="phone column d-flex-column justify-content-center m-auto p-auto">
                <label for="phone">Phone</label>
                <input  v-model="FormData.phone" class="input-box shadow-lg bg-white rounded" type="phone" name="phone" >
            </div>
            
            <div class="photo column d-flex-column justify-content-center m-auto p-auto">
                <label for="photo">Profile Photo</label>
                <input @change="onPicked" class="" type="file" name="photo" >
            </div>

            <div   class="password d-flex justify-content-between  m-auto p-auto">
               <div class="d-flex-column justify-content-center">
                    <label for="password">Password</label>
                    <input v-model="FormData.password" class="input-box shadow-lg bg-white rounded" type="text" name="password" >
               </div>
               <div class="d-flex-column justify-content-center m-auto p-auto">
                    <label for="confirm-password">Confirm Password</label>
                    <input  v-model="FormData.cnfpassword" class="input-box shadow-lg bg-white rounded" type="text" name="confirm-password" >
               </div>
            </div>

           <div class="button_section">
                <div v-if="login" class="d-inline-block justify-content-center m-auto p-auto">
                    <button @click.prevent="RegisterUser">Register</button>
                </div>
                <div v-else class="d-inline-block justify-content-center m-auto p-auto">
                    <button @click.prevent="LoginUser">Login</button>
                </div>
            
           </div>
        </form>
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
                login: true,
                register: true,
                view_name: "" ,
                image: "",
                FormData: {
                    email: "",
                    fname: "",
                    lname: "",
                    phone: "",
                    password:"",
                    cnfpassword: "",
                },
                
              }
       },
       computed:{
           
        },
       methods:{

           onPicked(e){
               
                const files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
           },
            createImage(file) {
                console.log("called")
                // let image = new Image();
                const reader = new FileReader();
                // let vm = this
                reader.onload = (e) => {
                    this.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },

            Login(){
               this.login = true
               this.register = false
               this.view_name = "Login"
            },

            Register(){
               this.login = false
               this.register = true
               this.view_name = "Register"
            },

            RegisterUser(){
               let registerData = {
                    email : this.FormData.email,
                    fname: this.FormData.fname,
                    lname: this.FormData.lname,
                    phone: this.FormData.phone,
                    password: this.FormData.password,
                    avatar: this.image
                }
                console.log(registerData)
                // this dispatches an action to the vue store to run the register function with the payload
                // this.$store.dispatch("register", registerData)
            },

             LoginUser(){
               let loginData = {
                    email : this.FormData.email,
                    password: this.FormData.password,
                }

                // this dispatches an action to the vue store to run the login function with the payload
                this.$store.dispatch("login", loginData)
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
    .column{
        display: flex;
        flex-direction: column;
    }
    .name,.phone,.email,.photo,.password{
        padding: 10px 0;
    }

    .input-box{
        padding: 7px;
        border: none;
        border-radius: 10px;
        outline: none;
    }

</style>