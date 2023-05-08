<template>

  <div class="box"> 
    <h2> Description </h2>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. 
     </p>
  </div>

</template>




<script>
  export default {
  name: 'TheDescription',
    
  }

</script>

<style scoped lang="scss">

.box {
  margin-top: 2rem;

  & h2 {
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--grafa-aqua);
    margin-bottom: 1rem;

  }
  & p {
    font-size: 0.9rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 1rem;
  }
}


</style>