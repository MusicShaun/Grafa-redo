<template>
  <article>
    <div class="container">
      <FiatTable />
      <FiatTable />


    </div>
  </article>
</template>




<script>
import FiatTable from './FiatTable.vue'

export default {
  name: 'FiatTableWrapper',
  components: {
    FiatTable,

  }
}


</script>



<style scoped lang="scss">

article {
  width: 100%;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  margin-top: 2rem;

  & > div {
    width: calc(50% - 10px);
  }
}


</style>