<template>
  <li>
    <a>
      <div class="nav-icon-container">
        <div >
          <slot></slot>
        </div>
        <div class="nav-list-label">
          {{ name }}
        </div>
      </div>
    </a>
  </li>

</template>


<script scoped>
import TheNavIcon from '../../assets/The-nav-icon.vue';


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
    navSvg: {
    }
  },
  data() {
    return {

    }
  }
}


</script>


<style scoped lang="scss" >
li {
  overflow: hidden;
  cursor: pointer;
  padding: 0px 1.25rem 0px 0.875rem;
  margin-bottom: 0.313rem;
  list-style-type: none;
  height: 30px;

}

.nav-icon-container {
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding: 5px 0;

  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.625rem;

    width: 20px;
    height: 20px;
  }
}

.nav-list-label {
  line-height: 1.2;
  font-size: .813rem;
  color: white;
}
</style>