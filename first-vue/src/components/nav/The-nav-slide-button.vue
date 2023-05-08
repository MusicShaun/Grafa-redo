<template>
  <button class="container" type="button" :class="!showNav ? 'show' : 'hide'">

  </button>


</template>


<script>


export default {
  name: 'NavSlideButton',
  components: {
    
  },
  props: {
    showNav: {
      type: Boolean,
      required: true
    }
  },
  
}

</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(0px);
  left: 126px;
  width: 50px;
  height: 106px;

  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 0.1em;
  background-color: var(--grafa-dark-blue);
  border: 1.5px solid var(--grafa-aqua);
  border-right-width: 1px;
  border-left: none;
  z-index: -1;

  cursor: pointer;
  
  transition: all 0.4s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    border-right: 2px solid var(--grafa-aqua);
    border-bottom: 2px solid var(--grafa-aqua);
    width: 10px;
    height: 10px;
    right: 22%;
    transform: rotate(-45deg)
  }
}
.hide {
  animation: hide .4s ease-in-out forwards;
  transition: all .4s ease-in-out;
}
@keyframes hide {
  0% {
    transform: translateX(-0px) translateY(-50%);
  }
  100% {
    transform: translateX(-115px)  translateY(-50%);
  }
}
.show {
  animation: show .4s ease-in-out forwards;
  transition: all .4s ease-in-out;
}
@keyframes show {
  0% {
    transform: translateX(-115px) translateY(-50%);
  }
  100% {
    transform: translateX(0px)  translateY(-50%);
  }
}

</style>