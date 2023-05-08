<template>
  <main class="wrapper">
    <div class="container">

      <BarChart />

      <TheDescription />

      <Activity />

      <CardWrapper />

    </div>
  </main>

</template>


<script >
import BarChart from './charts/Bar-chart.vue';
import TheDescription from './Description.vue';
import Activity from './Activity.vue';
import CardWrapper from './CardWrapper.vue';

export default {
  name: 'TheMain',
  components: {
    BarChart,
    TheDescription,
    Activity,
    CardWrapper

},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  flex: 1;
  margin: 0 auto;
  padding-left: 160px;
  

}
.container {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: 70rem;
  margin-inline: auto;
}


</style>