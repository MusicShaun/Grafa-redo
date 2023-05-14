<template>
  <main class="mainWrapper">
    <div class="container">

      <BarChart />

      <TheDescription />

      <Activity />

      <FiatTable />

      <BigFiatTable  :items="tableData" />
      <ThinFiatTable  :items="tableData2" />
      <BigFiatTable  :items="tableData3" />

      <RelatedNews />

      <CardWrapper/>

    </div>
  </main>

</template>


<script >
import BarChart from './charts/Bar-chart.vue';
import TheDescription from './Description.vue';
import Activity from './Activity.vue';
import CardWrapper from './CardWrapper.vue';
import RelatedNews from './RelatedNews.vue';
import FiatTable from './fiat-table/FiatTableWrapper.vue';
import BigFiatTable from './fiat-table/BigFIatTable.vue';
import ThinFiatTable from './fiat-table/ThinFiatTable.vue';
import tableData from '../db/big-table-example'
import tableData2 from '../db/another-table'
import tableData3 from '../db/last-one'

export default {
  name: 'TheMain',
  components: {
    BarChart,
    TheDescription,
    Activity,
    CardWrapper,
    FiatTable,
    BigFiatTable,
    ThinFiatTable,
},
  data() {
    return {
      tableData,
      tableData2,
      tableData3
    }
  }
}
</script>

<style scoped lang="scss">
.mainWrapper {
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
  flex-wrap: nowrap;
}


</style>