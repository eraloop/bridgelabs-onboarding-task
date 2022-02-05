<template>
    <div class="container">
        <h2> Welcome to our OAuth Login Screen </h2>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
       <!-- <div v-else>
           <button>Logout</button>
       </div> -->
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


</style>