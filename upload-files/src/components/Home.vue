<template>
        <!-- <div class="container">
         <div class="wrapper">
            <div class="image">
               <img src="" alt="No image found" >
            </div>
            <div class="content">
               <div class="icon">
                  <img src="../static/img/cloud-arrow-up.svg" alt="" >
               </div>
               <div class="text">
                  No file chosen, yet!
               </div>
            </div>
            <div id="cancel-btn">
               <i class="fas fa-times"></i>
            </div>
            <div class="file-name">
               File name here
            </div>
         </div>
         <button v:onclick="defaultBtnActive" id="custom-btn">Choose a file</button>
         <input id="default-btn" type="file" hidden>
      </div>
     -->

     <div class="container">
       <div class="content">
          <div v-if="true" class="uploaded_content">
              <img :src="{imgSrc}" alt="">
          </div>
          <div else class="preview_content">
            <img src="../static/img/cloud-arrow-up.svg" height="100px" width="100px" alt="">
            <h4>No file selected</h4>
          </div>
       </div>

       <div class="btn_section">
         <button
         @click="selectFile()"
         class="btn btn-primary block"
         v-if="notselected"
         >
         Choose a file
         </button>

         <input type="file" @change="pickFile">

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
export default {
  name: 'Home',

  data(){
    return{
      // regExp : `/[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/`,
      notselected : true,
      imgSrc: '',
      files:[],
      file: ''
    }
  },

  methods:{
    
    processFile(){
      const reader = new FileReader()
      let url = reader.readAsArrayBuffer(this.file)

      this.imgSrc = url
      console.log(imgSrc)
    },

    pickFile(){
      // console.log("clicked")
      // const reader = new FileReader();
      
      // // reader.onload = function(){
      // //   console.log("reached file reader")
      // //   const result = reader.result;
      // //   this.imgSrc = result;
      // // }

      // // this.file = this.files[0],
      // // reader.readAsDataURL(this.file);


      this.file = document.getElementById('input').files[0];

      if (this.file) {
        processFile();
      }
    },

    uploadFile(){
      console.log("clicked")
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
  margin: 2em auto;

}

.btn_section{
  margin: 2em auto;
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
</style>
