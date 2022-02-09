<template>
    <div class="container d-flex m-auto justify-content-center align-items-center ">
        <div class="content d-flex p-4 m-4 shadow-lg  mb-5 bg-white rounded">
            <div class="info-section d-flex-column p-5 m-5 justify-content-center align-items-center">
                <h4 class="pt-4 pb-4 mb-3">Register</h4>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Maiores nam aspernatur tempore placeat facilis quis tempora expedita 
                    asperiores quo quibusdam sunt incidunt voluptas vitae, nostrum
                     unde consequatur! Obcaecati, quos quidem?
                </p>
 
                <section class="button-section d-flex  pt-3 mt-3 " >
                    <button class="btn rounded p-2 ">Explore</button>
                    <button class="p-2 btn-primary rounded">Learn more ...</button>
                </section>

            </div>
            <div class="form-sectio p-5 m-5 justify-content-center align-items-center">
                <Form/>
            </div>
        </div>
        
    </div>
</template>
<script>
import Form from "../components/Form.vue";

   export default{
       components:{
            Form
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

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
    .btn{
        padding: 10px;
        margin: 0 5px;
        border-radius: 10px;
        border: none;
        outline: none;
        cursor: pointer ;
        color: white;
        font-weight: bold;
        /* background: ; */
    }
</style>