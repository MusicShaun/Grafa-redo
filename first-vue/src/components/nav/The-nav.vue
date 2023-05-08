<template> 
<Transition name="slide">
  <nav :class="{hideMenu: showNav}">
    <div class="top-nav-drawer">
      <ul>
        <NavButton name="News"><TheNavIcon /> </NavButton>
        <NavButton name="Watchlist" ><TheNavIcon /> </NavButton>
        <NavButton name="Hot"  ><TheNavIcon /> </NavButton>
        <NavButton name="Gold" ><TheNavIcon /> </NavButton>
      </ul>
    </div>

    <div class="nav-list-container">
      <TheNavTitle name="Discover more"  v-show="!showNav"></TheNavTitle>
      <ul>
        <NavButton name="Economy"><TheNavIcon /> </NavButton>
        <NavButton name="Learn" ><TheNavIcon /> </NavButton>
      </ul>
    </div>

    <div class="nav-list-container-channels">
      <TheNavTitle name="Channels" v-show="!showNav"></TheNavTitle>
      <ul>
        <NavButton name="Bloomberg"><TheNavIcon /> </NavButton>
        <NavButton name="Cheddar" ><TheNavIcon /> </NavButton>
        <NavButton name="CoindeskTv" ><TheNavIcon /> </NavButton>
        <NavButton name="FireBrick" ><TheNavIcon /> </NavButton>
        <NavButton name="grafa" ><TheNavIcon /> </NavButton>
        <NavButton name="Investing Channel" ><TheNavIcon /> </NavButton>
      </ul>
    </div>


    <div class="nav-bottom"  v-if:showNav="!showNav">
      <div class="bottom-buttons">
        <button>Sign Up</button>
        <button> Log in</button>
      </div>
      <p class="contact">Contact Us</p>
      <div class="terms">
        <p>T&C</p>
        <p>Privacy</p>
      </div>
    </div>

    <NavSlideButton
      v-bind:showNav="showNav"
      @click="showNav = !showNav"
      :class="{moveButton: showNav}"
      >
    
    </NavSlideButton>
  </nav>


</Transition>
</template>



<script>
import NavButton from './The-Nav-Button.vue'
import TheNavTitle from '../../assets/The-nav-title.vue';
import TheNavIcon from '../../assets/The-nav-icon.vue';
import NavSlideButton from './The-nav-slide-button.vue';

export default {
  name: 'Nav',
  components: {
    NavButton,
    TheNavTitle,
    TheNavIcon,
    NavSlideButton
  },
  data() {
    return {
      showNav: false
    }
  },
  computed: {
    console: () => console.log(this.showNav)
  }
  
}
  
</script>


<style scoped lang="scss">
nav {
  position: fixed;
  width: 160px;
  left: 0;
  top: 0;
  padding-top: 100px;
  bottom: 0;
  border-right: 1px solid var(--grafa-aqua);
  transition: all .4s ease-in-out;
  animation: showmenu .4s ease-in-out forwards;

  z-index: 10;
}

ul {
  height: fit-content;
  list-style-type: none;
  margin: 0;
  padding: 0;

}
.nav-list-container {
  overflow-x: hidden;
}
.nav-list-container-channels {
  background-color: var(--grafa-dark-blue);
  overflow-x: hidden;
}
.nav-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.bottom-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: center;

  & button {
    width: 90%;
    padding: 8px;
    border: none;
    border-radius: 5px;
    font-size: .75rem;
    font-weight: 700;

  }
  & button:nth-child(1) {
    background-color: var(--grafa-aqua);
  }
  & button:nth-child(2) {
    background-color: var(--grafa-grey-blue);
    color: white;
  }
}
.terms {
  display: flex;
  gap: 8px;
  font-size: .6rem;
  color: var(--grafa-aqua);
  margin-bottom: 10px;
}
.contact {
  color: white;
  font-size: .75rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  margin-top: 8px;
  margin-bottom: 8px;
}
.hideMenu {
  animation: hidemenu .4s ease-in-out forwards;
  transition: all .4s ease-in-out;
}
@keyframes hidemenu{
  0% {
    width: 160px;
  }
  100% {
    width: 45px;
  }
}
@keyframes showmenu {
  0% {
    width: 45px;
  }
  100% {
    width: 160px;
  }
}

</style>