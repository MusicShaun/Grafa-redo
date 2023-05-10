<template>
  <div class="container"> 
    <h2>
      Highest
    </h2>
    <div class="options">
      <button class="options-button">LARGE CAP</button>
      <button class="options-button">Mid Cap</button>
      <button class="options-button">Small Cap</button>
      <button class="options-button">Micro Cap</button>
      <button class="options-button">All ASX</button>
    </div>
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
        <col span="1" style="width: 10%;">
        <col span="1" style="width: 10%;">
        <col span="1" style="width: 10%;">
      </colgroup>
      <tbody>
        <tr >
          <td class="first-td">
            <a>
              <span class="tbody-icon"></span>
              <div class="tbody-text">
                <div class="tbody-header">LYC</div>
                <div class="tbody-subheader">LYNAS RARE EARTH</div>
              </div>
            </a>
          </td>
          <td>37.5%</td>
          <td>37.5%</td>
          <td>37.5%</td>
        </tr>
        <tr >
          <td class="first-td">
            <a>
              <span class="tbody-icon"></span>
              <div class="tbody-text">
                <div class="tbody-header">LYC</div>
                <div class="tbody-subheader">LYNAS RARE EARTH</div>
              </div>
            </a>
          </td>
          <td>37.5%</td>
          <td>37.5%</td>
          <td>37.5%</td>
        </tr>

      </tbody>
    </table>
]
    // view more arrow 


  </div>
</template>



<script>


export default {
  name: "FiatTable",

  props: {

  }
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
}
.options {
  height: 31px;
  margin-bottom: 1rem;

  & button {
    border: none;
    background-color: var(--grafa-grey-blue);
    color: white;
    padding: 0.5rem;
    margin-right: 5px;
  }
}
table {
  border-collapse: collapse;
}
thead {
  border-bottom: 1px solid var(--grafa-aqua);
  & tr td {
    font-weight: 600;
    font-size: 0.85rem;
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
  display: flex;
  align-items: center;
  gap: 0.5em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 1rem;
  width: 100%;

  & a {
    display: flex;
    align-items: center;
  }
  & a .tbody-icon {
    aspect-ratio: 1/1;
    background-color: white;
    height: 2.4em;
    width: 2.4em;
    min-width: 2.4em;
    margin-right: 0.5em;
    border-radius: 3px;
  }
  & a .tbody-text {
    position: relative;
    & .tbody-header {
      position: absolute;
      top: 0;
      line-height: 1;
      font-weight: 700;
      font-size: 1rem;
    }
    & .tbody-subheader {
      position: absolute;
      bottom: 0;
      font-size: 0.875rem;
      color: var(--grafa-aqua);
      line-height: 1.2;
      
    }
  }
}

</style>