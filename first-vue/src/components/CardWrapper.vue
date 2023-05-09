<template>
  <RelatedNews @carousel-move="moveCarousel" :at-start="atStart" :at-end="atEnd"/>
  <article >
    <div class="card-wrapper" ref="cardWrapperRef">
      <div class="card-container" :style="{ transform: `translateX(${translateX}px)` }" ref="cardRef">
        <Card v-for="(image, index) in images" :key="index" :grafaImage="image" />
      </div>
    </div>
  </article>

</template>





<script>
import { ref } from 'vue'
import Card from './Card.vue'
import RelatedNews from './RelatedNews.vue'

export default {
  name: 'CardWrapper',
  components: {
    Card,
    RelatedNews
  },
  data() {
    return {
      translateX: 0,
      images: [
        'https://images.grafa.com/grafa/media-55745-638094327491868852.png',
        'https://d3ryyg5y6sbe7b.cloudfront.net/news/asx-closing-wrap-5.png',
        'https://images.grafa.com/grafa/media-55745-638094327491868852.png',
        'https://d3ryyg5y6sbe7b.cloudfront.net/news/asx-closing-wrap-7.png',
        'https://d3ryyg5y6sbe7b.cloudfront.net/news/asx-closing-wrap-4.png',
        'https://d3ryyg5y6sbe7b.cloudfront.net/news/asx-lunch-4.png',
        'https://d3ryyg5y6sbe7b.cloudfront.net/news/asx-closing-wrap-2.png',
        'https://d3ryyg5y6sbe7b.cloudfront.net/news/asx-closing-wrap-7.png'
      ]
    }
  },
  mounted() {
    this.cardWidth = this.$refs.cardWrapperRef.offsetWidth / 16;
  },
  computed: {
    atStart() {
      console.log(this.translateX ===0) 
      return this.translateX === 0
    },
    atEnd() {
      const maxTranslateX = -this.cardWidth * (this.images.length - 4);
      return this.translateX === maxTranslateX;
    }
  },
  methods: {
    moveCarousel(direction) {
      if (direction === 'left' && this.translateX < 0) {
        this.translateX += this.cardWidth; 
      } else if (direction === 'right' && this.translateX > -this.cardWidth * (this.images.length - 4)) {
        this.translateX -= this.cardWidth; 
      }
    },
  }
}

</script>





<style scoped lang="scss">
article {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0rem 0px 5rem;
  overflow: hidden;
}
.card-wrapper {
  width: 400%;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(6.25%), 1fr));
  grid-auto-flow: column;
  transition: transform 0.3s ease-in-out;
  gap: 0px;
}

</style>

