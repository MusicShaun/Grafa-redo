<template>
  <div class="card-wrapper">
    <div class="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>

</template>

<script>
import Card from './Card.vue'

export default {
  name: 'CardWrapper',
  components: {
    Card
  }
}

</script>


<style scoped lang="scss">
.card-wrapper {
  position: relative;
  width: 100%;
 
  margin: 5rem 0px ;
}
.card-container {
  display: flex;
  
}

</style>