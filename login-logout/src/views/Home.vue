<template>
    <div class="container d-flex m-auto justify-content-center align-items-center rounded ">
        <div class="content d-flex m-5 shadow-lg  mb-5 bg-white rounded">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="info-section d-flex-column p-5 m-2 justify-content-center align-items-center">
                        <h4 class="pt-4 pb-4 mb-3">{{viewName}}</h4>
                        <p >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Maiores nam aspernatur tempore placeat facilis quis tempora expedita 
                            asperiores quo quibusdam sunt incidunt voluptas vitae, nostrum
                            unde consequatur! Obcaecati, quos quidem?
                        </p>
                        <p >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Maiores nam aspernatur tempore placeat facilis quis tempora expedita 
                        </p>
        
                        <section class="button-section d-flex  pt-3 mt-3 " >
                            <button class="btn rounded p-2 pr-4 pl-4">Explore</button>
                            <button class="p-2 btn-link">Learn more ...</button>
                        </section>

                    </div>
                    </div>
                   <div class=" form-region col-lg-7">
                        <div class="form-sectio p-5 m-2 justify-content-center align-items-center">
                            <FormView/>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import FormView from "../components/FormView.vue";

   export default{
       components:{
            FormView
       },
       data(){
           return{
               
              }
       },
       computed:{
          viewName(){
              return this.$store.getters.get_view_name
          }
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
        font-size: 1em;
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
        background: #2c3e50;
    }
    .btn-link{
        color: #2c3e50;
        font-weight: bold;
        border: none;
        outline: none;
        cursor: pointer ;
        background: none;
    }
    
    .info-section h4{
        font-size: 2.5em;
        font-weight: bold;
    }
    .info-section p{
        font-size: 1.1em;
        line-height: 1.5;
    }

    .form-region{
        background: #f2f5f8;
    }
</style>