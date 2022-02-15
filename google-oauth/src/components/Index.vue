<template>
    <div class="container">
       <div class="content p-4 ">
           <div class="google-form text-center justify-content-center align-items-center">
                <h2 class="p-2"> Welcome to our OAuth Login Screen </h2>
                <div class="g-signin2 m-2 text-center" data-onsuccess="onSignIn"></div>
           </div>
           <div class="custom">
               <p>Don't have a google account? </p><a target="blank" href="www.google.com">Create One</a>
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
               profile: {}
            }
       },
       computed:{
           
        },
       methods:{
            onSignIn(googleUser) {
                console.log(googleUser)
                this.profile = googleUser.getBasicProfile();
                console.log(this.profile)
                // console.log('ID: ' + this.profile.getId()); // Do not send to your backend! Use an ID token instead.
                // console.log('Name: ' + this.profile.getName());
                // console.log('Image URL: ' + this.profile.getImageUrl());
                // console.log('Email: ' + this.profile.getEmail()); // This is null if the 'email' scope is not present.
            },

       },
       mounted: {
         
                // signOut() {
                //     var auth2 = gapi.auth2.getAuthInstance();
                //     auth2.signOut().then(function () {
                //     console.log('User signed out.');
                //     });
                // }
       }
    }

</script>
<style scoped> 

    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        text-align: center;
        margin: auto;
        height: 100vh;
        width: 100%
    }
    
    .content{
        /* border: 1px solid black ; */
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        width: 40%;
        height: 40%;
        padding: 20px;
        border-radius: 10px ;
        outline: none;

    }
    .google-form{
        padding: 10px 0 20px;
        margin-bottom: 30px;
        text-align: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .custom{
        padding: 10px 0;
        margin: 10px 0;
        color:#2c3e50;
    }

</style>
