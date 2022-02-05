<template>

     <div class="container">
       <div class="content">
          <div v-if="this.imgSrc" class="uploaded_content" id="image-section">
            <div v-if="validImage">
              <img src="../static/img/user-solid.svg" height="100px" width="100px" alt="">
              <h4>Image selected</h4>
              <p>Please upload to local json database</p>
                <!-- <img :src="{imgSrc}" alt=""> -->
            </div>

            <div v-else >
              <img src="../static/img/file-earmark-check.svg" height="100px" width="100px" alt="">
              <h4>File selected</h4>
               <p>Please upload to local json database</p>
            </div>
          </div>
          <div v-else class="preview_content">
            <img src="../static/img/cloud-arrow-up.svg" height="100px" width="100px" alt="">
            <h4>No file selected</h4>
          </div>
       </div>

       <div class="btn_section">

         <input ref="fileInput" type="file" @change="pickFile" class="fileInput">

         <button
         @click="selectFile()"
         class="btn btn-primary block"
         v-if="notselected"
         >
         Choose a file
         </button>

         

        <button
         @click="uploadFile()"
         class="btn btn-primary block"
         v-if="!notselected"
         >
         Upload file
         </button>
         
       </div>
     </div>
</template>

<script>
import {axios} from "axios";
// import {$refs} from "vue";


export default {
  name: 'Home',

  data(){
    return{
      // regExp : `/[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/`,
      notselected : false,
      imgSrc: '',
      files:[],
      file: '',
      validImage : ""
    }
  },

  methods:{

    pickFile(event){

      let imageTypes = ["image/jpeg", "image/jpg", "image/png"]; 

      this.imgSrc = event.target.files[0];
      const imagetype = this.imgSrc.type

      if(imageTypes.includes(imagetype)){
        this.validImage = true
      }else{
        this.validImage = false
      }
      console.log(this.imgSrc)
    },

    uploadFile(){
      let result;

      if(this.validImage){
        result = {
          "name": this.imgSrc.name,
          "type": this.imgSrc.type
        }
      }else{
        result = {
          "name": this.imgSrc.name,
        }
      }

      try{
        const res = axios.post(" http://localhost:3000/posts", result )
        console.log(res)
      }catch(e){
        console.log(e)
      }

    },


    getUploadedFile(){
      try{
        const res = axios.get(" http://localhost:3000/posts")
        console.log(res)
      }catch(e){
        console.log(e)
      }

    }

    
  }
}

</script>

<style scoped>
/* @import '../static/styles.css'; */

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* custom styles */

*{
  color:#00134D;
}
.container{
  width: 100%;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
}
.content{
  border: 2px solid #2F4791;
  border-spacing: 50px;
  border-style: dashed;
  box-shadow: #9baee7 0px 8px 24px;
  border-radius: 10px;
  height: 300px;
  width: 350px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em auto;

}

.btn_section{
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  -ms-flex-order: reverse;
}

.btn_section .btn {
  width: 350px;
  border-radius: 50px;
  border: none;
  outline: none;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  background: #00134D;
  padding: 15px;
  font-size: 1em;
  box-shadow: #9baee7 0px 8px 24px;
  cursor: pointer;
}

input.fileInput{
  border: none;
  outline: none;
  color: #00134D;
  text-decoration-style: underline;
  font-size: 1.2em;
  font-weight: 500;
  margin: 20px 0;
}

#file-upload-button{
  border: 2px solid #00134D;
  border-style: dashed;
  border-radius: 10px round;
  display: none;
}
</style>
