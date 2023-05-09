<template>
  
  <div class="container"> 
    <div class="box">
      <div class="icon">
        <img src="https://grafa.com/img/news-fill.eefe0044.svg" :alt="'image'">
      </div>
      <div class="text">
        <h2>Related News</h2>
        <p>Latest news about XAO and its peers</p>
      </div>
    </div>
    <div class="box2">
      <div :class="circleClass(0)" @click="moveCarousel('left')">
        <div class="left-arrow" />
      </div>
      <div :class="circleClass(1)" @click="moveCarousel('right')">
        <div class="right-arrow" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RelatedNews',
  components: {
    
  },
  methods: {
    moveCarousel(direction) {
      this.$emit('carousel-move', direction);
    }
  },
  props: {
    atStart: {
      type: Boolean,
      default: true
    },
    atEnd: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    circleClass() {
      return (index) => {
        if (index === 0 && this.atStart) {
          return 'circle atStart';
        } else if (index === 1 && this.atEnd) {
          return 'circle atEnd';
        } else {
          return 'circle';
        }
      }
    }
  }


}



</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 50px;
  margin: 3rem 0 0 0;
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;

}
.box {
  display: flex;
}
.box2 {
  width: 100px;
  display: flex;
  align-items: center;
  & .circle {
    width: 25px;
    height:25px;
    background-color: var(--grafa-aqua);
    border-radius: 50%;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .atStart {
    background-color: yellow;
  }
  .atEnd {
    background-color: yellow;
  }
  & .left-arrow {
    border-left: 1.8px solid var(--grafa-dark-blue);
    border-bottom: 1.8px solid var(--grafa-dark-blue);
    border-radius: 2px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg) translate(1px, -1px);
  }
  & .right-arrow {
    border-left: 1.8px solid var(--grafa-dark-blue);
    border-bottom: 1.8px solid var(--grafa-dark-blue);
    border-radius: 2px;
    width: 10px;
    height: 10px;
    transform: rotate(225deg) translate(1px, -1px);
  }
}
.icon {
  width: 48px;
  height: 48px;

  & img {
    width: 100%;
    height: 100%;
  }
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;

  & h2 {
    font-size: 1.7rem;
    font-weight: 600;
    line-height: 1;
    margin: 0;
  }
  & p {
    color: var(--grafa-aqua);
  }
}

</style>