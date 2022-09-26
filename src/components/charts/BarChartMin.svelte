<script lang="ts">
  import Chart from 'chart.js/auto/auto.mjs';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  import { onMount } from 'svelte';

  let chartRef: HTMLCanvasElement;

  // following code is working with:
  // @sveltejs/kit: 1.0.0-next.372
  // vite: 2.9.14
  onMount(() => {
    Chart.register(ChartDataLabels);
      new Chart(chartRef, {
          type: 'bar',
          data: {
              labels: [
        ["Real Estate","Investment Trust"],
        ["Average","Investor"]
    ],
              datasets: [{
                label: '20-year annualized returns by asset class (1999-2018)',
                  backgroundColor: [
          'rgba(0, 48, 201,1)',
          'rgba(0, 48, 201,1)',
        //   'rgba(209, 239, 203,1)',
        ],
        borderWidth: 0,
        borderColor: [
          'rgba(98,  182, 239, 1)',
          'rgba(98,  182, 239, 1)',
        //   'rgba(255, 177, 101, 1)',
        ],
                  data: [
            9.9,
            1.9
        ]
              }]
          },
          options: {
            responsive: true,
    layout: {
        padding: {
            top: 50
        }
    },
    scales: {
        x: {
            grid: {
                display: false,
                borderWidth: 0
            }
        },
        y: {
            display: false,
            grid: {
                display: false,
                borderWidth: 0
            }
        },
    },
    plugins: {
        legend: {
            display: false
        },
        datalabels: {
            anchor: 'end',
            align: 'top',
            // formatter: Math.round,
            font: {
                weight: 'bold'
            },
            formatter: function(value, context) {
                return Math.round(value) + '%'
                // return context.chart.data.labels[context.dataIndex];
            }
        },
        tooltip: {
            enabled: false
        }
    }
          }
      });
  });
</script>

<canvas bind:this={chartRef} />