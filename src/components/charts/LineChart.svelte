<script lang="ts">
  import Chart from 'chart.js/auto/auto.mjs';
  import { onMount } from 'svelte';

  let chartRef: HTMLCanvasElement;

  // following code is working with:
  // @sveltejs/kit: 1.0.0-next.372
  // vite: 2.9.14
  onMount(() => {
      new Chart(chartRef, {
          type: 'line',
          data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgba(0, 48, 201,1)',
                  borderColor: 'rgba(0, 48, 201,1)',
                  data: [0, 10, 5, 2, 20, 30, 45]
              }]
          },
          options: {
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
          }
      });
  });
</script>

<canvas bind:this={chartRef} />