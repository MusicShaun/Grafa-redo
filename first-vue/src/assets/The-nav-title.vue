<template>
  <button>
    <div class="nav-icon-container">
      <div class="nav-list-label">
        {{ name }}
      </div>
    </div>
  </button>


</template>

<script>
import TheNavIcon from './The-nav-icon.vue';

export default {
  name: 'NavButton',
  components: {
    TheNavIcon
  },
  props: {
    name: {
      type: String,
      required: true
    },
    svg: {

    }
  },
  data() {
    return {

    }
  }
}


</script>


<style scoped lang="scss">
button {
  text-decoration: none;
  border: none;
  background-color: none;
  background: none;

  overflow: hidden;
  cursor: pointer;
  padding: 0 1.25rem 0 0.875rem;
  margin-bottom: 0.313rem;
  list-style-type: none;
  height: 30px;


}

.nav-icon-container {
  display: flex;
  align-items: center;
  height: 100%;

  color: #079cff;
  white-space: nowrap;
  font-size: .688rem;
  text-transform: none;

}



</style>