<template>

  <table class="box">
    <caption>Activity</caption>
    <tbody>
      <tr>
        <th>Last Price</th><td>$2352</td>
      </tr>
      <tr>
        <th>Change</th><td>$2362</td>
      </tr>
      <tr>
        <th>Open</th><td>$789</td>
      </tr>
      <tr>
        <th>Day Range</th><td>$0923</td>
      </tr>
    </tbody>
  </table>
</template>


<script>

export default {
  name: 'Activity',
}
</script>


<style scoped lang="scss">
table {
  display: table;
  grid-row: span 2;
  height: fit-content;
  width: 100%;
  max-width: 352px;
  border-collapse: collapse;
  margin-top: 2rem;

}
caption {
  font-size: 1.25rem;
  font-weight: 500;
  color: #59d8e7;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #59d8e7;
  text-align: left;
}
tr {
  border-bottom: #49c8ef5e 0.3px solid;
  width: 100%;
  
  

}
th {
  text-align: left;
  font-size: 0.8rem;
  height: 30px;
  padding-top: 0.5rem;
}
td {
  text-align: right;
  font-weight: 700;
  padding-top: 0.5rem;
}

</style>