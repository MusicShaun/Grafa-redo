<template>
  <div class="container">
    <div class="box">
      <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
    </div>  
  </div>
</template>



<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemver', 'December'],
        datasets: [
          {
            label: 'some data',
            backgroundColor: '#49c8ef',
            data: [40, 20, 12, 14, 45, 23, 71, 12, 43, 23, 12, 23]
          }
        ]
      },
      chartOptions: {
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                color: "#ffffff"
              },
              ticks: {
                stepSize: 1,
                callback: function (value, index, values) {
                  if (value % Math.round(values[0] / 6) == 0) {
                    return value;
                  } else if (value === 0) {
                    return value;
                  }
                },
              },

            },
          ],
        },
        maintainAspectRatio: false,
        legend: {
          labels: {
            boxWidth: 10,
          },
          position: "top",
        },
        animation: {
          duration: 2000,
          easing: "easeInOutQuart",
        },
      },
    }
  },
}

</script>

<style scoped>

.container {
  width: calc(100% - 130px);
  height: 100%;
  margin-left: 130px;

  display: flex;
  justify-content: center;
}
.box {
  width: 90%;
  height: 255px;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
}

</style>


