<template>
  <div class="container"> 


    <h2 :style="{ color: items.title !== 'Stocks on the charge' ? 'var(--grafa-red)' : 'var(--grafa-green)' }">
      {{ items.title }}
    </h2>
    <div class="options">
      <button class="options-button" 
        :style="{
          backgroundColor: items.title !== 'Stocks on the charge' ? 'var(--grafa-red)' : 'var(--grafa-green)',
          color: 'black',
          }">LARGE CAP</button>
      <button class="options-button">Mid Cap</button>
      <button class="options-button">Small Cap</button>
      <button class="options-button">Micro Cap</button>
      <button class="options-button">All ASX</button>
    </div>
    <p>These are companies that have a market cap > $5B</p>


    <table>
      <thead>
        <tr>
          <td>COMPANY</td>
          <td>VOLUME</td>
          <td>LAST</td>
          <td>%CHG</td>
        </tr>
      </thead>
      <colgroup>
        <col span="1" style="width: 50%;">
        <col span="1" style="width: 25%;">
        <col span="1" style="width: 15%;">
        <col span="1" style="width: 10%;">
      </colgroup>


      <tbody>
        <tr v-for="item in items.companies" :key="item.name">
          <td class="first-td">
            <a>
              <span class="tbody-icon"></span>
              <div class="tbody-text">
                <div class="tbody-header">{{ item.name }}</div>
                <div class="tbody-subheader"> {{ item.desc }}</div>
              </div>
            </a>
          </td>
          <td>{{ item.vol }}</td>
          <td>{{ item.last }}</td>
          <td 
            :style="{ color: items.title !== 'Stocks on the charge' ? 'var(--grafa-red)' : 'var(--grafa-green)', textAlign: 'right' }">
            {{ item.chg }}
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>



<script>


export default {
  name: "FiatTable",

  props: {
    items: {
      type: Object,
      required: true,
    },
  },
}


</script>



<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  //* width is in parent 
}

h2 {
  font-weight: 700;
  color: rgb(0, 236, 0);
  line-height: 0.5;
  font-size: 1.125rem;
}
.options {
  margin-top: 10px;
  margin-left: 0;
  white-space: nowrap;

  & button {
    border: none;
    background-color: var(--grafa-grey-blue);
    color: white;
    padding: 0.3rem 0.4rem;
    margin-right: 6px;
    border-radius: 16px;
  }
}

table {
  border-collapse: collapse;
  width: 100%;
}
thead {
  border-bottom: 1px solid var(--grafa-aqua);
  & tr td {
    font-weight: 400;
    font-size: 0.68rem;
    color: var(--grafa-aqua);
  }
}
tbody {
 vertical-align: middle;
}
tbody tr {
  height: calc(35px + 28px);
  max-height: calc(35px + 28px);
  padding: 14px 0;
  border-bottom: 1px solid var(--grafa-aqua);
  width: 100%;

  
  & td:last-child {
    color: rgb(0, 235, 0);
  }
}

.first-td {
  gap: 0.5em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 100%;

  & a {
    display: flex;
    align-items: center;
  }
  & a .tbody-icon {
    aspect-ratio: 1/1;
    background-color: white;
    height: 1.4em;
    width: 1.4em;
    min-width: 1.4em;
    margin-right: 0.5em;
    border-radius: 3px;
  }
  & a .tbody-text {
    position: relative;
    & .tbody-header {
      position: absolute;
      bottom: 0;
      line-height: 1;
      font-weight: 700;
      font-size: 1rem;
    }
    & .tbody-subheader {
      position: absolute;
      top: 0;
      font-size: 0.875rem;
      color: var(--grafa-aqua);
      line-height: 1.2;
      
    }
  }
}

</style>