<template>
  <div class="home d-flex justify-content-center align-items-center m-auto" >
    <Index/>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '../components/Index'

export default {
  name: 'Home',
  components: {
    Index
  }
}
</script>
<style scoped>
  .home{
    max-width: 60%;
    box-sizing: border-box;
  }
</style>
