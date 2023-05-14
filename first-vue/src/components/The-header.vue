<template>
  <header >
    <div class="container">

      <div name="logo" class="logo-container">
        <h1>Grafa</h1>
      </div>

      <form class="search">
        <div name="search" class="search-container">
          <label for="search">Search</label>
          <input type="text" name="search" placeholder="Search Grafa">
          <div class="icon">
            <Magnify />
          </div>
        </div>
      </form>

      <div name="user" class="login-container">
        <button class="login">LOG IN </button>
        <button class="signup">SIGN UP</button>
      </div>

    </div>
  </header>
</template>

<script>
import Magnify from '../assets/The-Magnify.vue'

export default {
  name: 'Header',
  components: {
    Magnify
  },
  data() {
    return {
      previous: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.hideHeader)
  },
  unmounted() {

  },
  methods: {
    hideHeader() {
      let current = window.scrollY
      if (current > this.previous) {
        document.querySelector('header').style.transform = 'translateY(-100%)'
      } else {
        document.querySelector('header').style.transform = 'translateY(0%)'
      }
      console.log(window.scrollY)
      this.previous = current

      //REDO THIS 
      // HAVE THE METRIC BE PERCENTAGES.
      // LIMITERS ARE TRANSLATE 100% AND 0%
      // EVERY SCROLL ADD A PERCENTAGE TO THE TRANSLATE
      // UNTIL IT LIMITS AT -100%
    }
  }

}


</script>

<style scoped lang="scss">
header {
  position: relative;
  min-height: calc(max(1rem, 32px) + 1rem);
  width: 100%;
  padding: 14px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grafa-dark-blue);
  z-index: 10;
}
.container {
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-container { 
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  margin: 0px 20px;
  & h1 {
    font-size: 2.12rem;
    color: #fff;
    font-weight: 700;
    text-align: center;
    padding: 0;
    margin: 0;
  }
}
.search {
  flex: 1 1 auto;
  transition: all 0.2s linear;
  display: flex;
  justify-content: center;
}
.search-container {
  position: relative;
  max-width: 40em;
  min-width: 45em;
  width: 50%;
  background: linear-gradient(180deg,#49c8ef,#70efde);
  border-radius: 1.875rem;
  height: 2.188rem;
  padding: 0.125rem;

  display: flex;
  align-items: center;
  
  & label {
    position: absolute;
  }
  & input {
    width: 100%;
    height: 31px;
    border-radius: 1.875rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color:var(--grafa-dark-blue);
    outline: none;
    color: white;
    font-size: 1rem;
    line-height: 1.15;

    &::placeholder {
      color: #fff;
      font-size: 1rem;
    }
  }
}
.icon {
  position: absolute;
  right: 0.5rem;
  color: #fff;
  width: 1.8rem;
  height: 1.8rem;
}

.login-container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 1rem;
  margin: 0;
  gap: 0.5em;
  width: fit-content;
  
  display: flex;
  align-items: center;
  padding: 0 0.5em 0 0;
  white-space: nowrap;
& * {
  font-weight: 700;
  font-size: 0.88rem;
  padding: 0.35rem 0.4rem;
  box-shadow: 0 4px 4px rgba(0,0,0,.25);
}
}
.login {
  background: none;
  border: none;
  color: #fff;
}
.signup {
  border: none;
  background: var(--grafa-aqua);
  border-radius: 3px;
  color: black;
}
</style>