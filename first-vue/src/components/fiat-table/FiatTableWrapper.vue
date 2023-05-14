<template>
  <article >
    <div class="container" >
      <FiatTable  :items="bull" />
      <FiatTable   :items="bear" />



    </div>
  </article>
</template>




<script>
import FiatTable from './FiatTable.vue'
import bull from '../../db/charge-stocks.js'
import bear from '../../db/red-stocks.js'
 

export default {
  name: 'FiatTableWrapper',
  components: {
    FiatTable,

  },
  data() {
    return {
      bull,
      bear
    }
  },


}


</script>



<style lang="scss" scoped>

article {
  width: 100%;
}
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  margin-top: 2rem;

  & > div {
    width: calc(100% - 50px);
    margin: 2rem auto 0;
  }
}

@media (min-width: 900px) {
  .container {
    flex-direction: row;
    padding: 0 0.5rem;

    & > div {
    width: calc(50% - 10px);
  }
  }
}


</style>

