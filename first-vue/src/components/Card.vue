<template>
  <article>
    <div class="header">
      <a>
        <div class="icon"></div>
        <div>Grafa</div>
      </a>
      <button class="follow">
        <span class="follow-button__icon">
          <div class="bottom-tick"/>
          <div class="right-tick"/>
          <div class="circle" />
        </span>
        FOLLOWING
      </button>
    </div>
    <div class="image">
      <img src="../assets/example.png" alt="My Image" />
    </div>
    <div class="text">
      <h3>The ASX is at lunch - </h3>
      <h3>Find out who and why?</h3>
    </div>
  </article>

</template>

<script>
import getImage from '../assets/example.png'
console.log(getImage)

export default {
  data() {
    return {
      
    }
  }
}
</script>


<style scoped lang="scss">

article {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 263px;
  height: 314px;
  color: white;
  margin-right: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  height: 66px;
  padding: 12px 4px;
  & a {
    display: flex;
    align-items: center;

    & > div {
      font-weight: 700;
      font-size: 1rem;
    }
  }
  & .icon {
    width: 40px;
    height: 40px;
    background-color: var(--grafa-aqua);
    border-radius: 5px;
    margin-right: 8px;
  }
  & .follow {
    background-color: none;
    background: none;
    text-decoration: none;
    border: none;
    color: var(--grafa-aqua);
    font-weight: 500;

    &:hover {
      cursor: pointer;
      color: var(--grafa-light-blue);

      & span > div {
        border-color: white;
      }
    }

    & .follow-button__icon {
      padding: 0 5px;

    }
    & .bottom-tick {
      position: absolute;
      width: 0;
      height: 6px;
      border-right: 1.8px solid var(--grafa-aqua);
      border-radius: 1px;
      top: 0;
      left: 0;
      transform: rotate(-45deg) translateX(-9px);
    }
    & .right-tick {
      position: absolute;
      width: 0;
      height: 11px;
      border-right: 1.8px solid var(--grafa-aqua);
      top: 0;
      left: 0;
      transform: rotate(40deg) translateY(2px);
      border-radius: 1px;
    }
    & .circle {
      position: absolute;
      width: 17px;
      height: 17px;
      border: 1.4px solid var(--grafa-aqua);
      border-radius: 50%;
      top: 0;
      left: 0;
      transform: translate(-11px, -1px);
    }
  }

}

.image {
  width: 100%;
  height: 150px;

  & img {
    width: 100%;
    height: 100%;
    background-size: contain;
    border-radius: 12px;
  }
}

.text{
  height: 60px;
  width: 100%;
  padding: 4px;
  margin-top: 10px;
  
  & h3 {
    font-weight: 700;
    font-size: 1.2rem;;
  }
}
</style>