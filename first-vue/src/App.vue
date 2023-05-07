<template>
  <Header />
  <Nav /> 
  <TheMain />
</template>


<script >
import Header from './components/The-header.vue'
import Nav from './components/nav/The-nav.vue'
import TheMain from './components/The-main.vue'


export default {
  name: 'App',
  components: {
    Header,
    Nav,
    TheMain,

  },
  data() {
    return {
      

    }
  }
}
</script>



<style scoped>
#app {
  background-color:#041f33;
}

</style>
