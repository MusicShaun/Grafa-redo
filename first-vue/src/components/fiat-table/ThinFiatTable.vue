<template>
  <div class="wrapper" scoped>
  <div class="container"> 


    <h2>
      {{ items.title }}
    </h2>
    <h3 style="fontWeight: 400">{{ items.heading }}</h3>

    <table>
      <thead>
        <tr :key="item">
          <td v-for="item in items.headers" >{{  item }}</td>

        </tr>
      </thead>
      <colgroup >
        <col span="1" style="width: 40%">
        <col v-for="item in items.headers" span="1">
      </colgroup>


      <tbody>
        <tr v-for="item in items.companies" :key="item.name">
          <td class="first-td">
            <a>
              <div class="tbody-subheader"> {{ item.company }}</div>
            </a>
          </td>
          <td 
            v-for="sub in Object.keys(item).filter((key) => key !== 'company' && key !== 'symbol')"
            :style="{
              color: !sub.toLowerCase().includes('chg') ? 'white' 
                : item[sub].startsWith('-') ? 'var(--grafa-red)' : 'var(--grafa-green)'  
              }"
            >{{ item[sub] }}</td>

        </tr>
      </tbody>
    </table>

  </div>
  </div>
</template>



<script>


export default {
  name: "ThinFiatTable",

  props: {
    items: {
      type: Object,
      required: true,
    },
  },
}


</script>



<style scoped lang="scss">
.wrapper {
  width: 100%  ;
  margin: 2rem 0;
  
}
.container {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;


}

h2 {
  font-weight: 700;
  font-size: 1.125rem;
}
h3 {
  color: var(--grafa-aqua);
  font-size: 1rem;
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
  height: calc(35px + 12px);
  max-height: calc(35px + 28px);
  padding: 14px 0;
  border-bottom: 1px solid var(--grafa-aqua);
  width: 100%;
}
.tbody-subheader {
  font-size: 0.875rem;
  color: var(--grafa-aqua);
  line-height: 1.2;
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

  }
}

</style>