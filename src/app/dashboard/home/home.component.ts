import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import Chart, {ChartOptions} from 'chart.js/auto';
declare var $: any;
import 'flot'; // Importa Flot

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  areaChartContext: CanvasRenderingContext2D | undefined
  @ViewChild('interactive') interactiveElement!: ElementRef;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const areaChartCanvas = $(this.elementRef.nativeElement).find('#areaChart').get(0);
    this.areaChartContext = areaChartCanvas.getContext('2d');
    this.createAreaChart();
    this.initializeChart();
  }

  createAreaChart(): void {
    if (this.areaChartContext) {
      const areaChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Digital Goods',
            backgroundColor: 'rgba(60,141,188,0.9)',
            borderColor: 'rgba(60,141,188,0.8)',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: true,
            tension: 0.6
          },
          {
            label: 'Electronics',
            backgroundColor: 'rgba(210, 214, 222, 1)',
            borderColor: 'rgba(210, 214, 222, 1)',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            tension: 0.6
          }
        ]
      };

      const areaChartOptions: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      };


      new Chart(this.areaChartContext, {
        type: 'line',
        data: areaChartData,
        options: areaChartOptions
      });
    } else {
      console.error('El contexto del lienzo es nulo o indefinido.');
    }
  }

  /*
  #################################
          INTERACTIVE CHART
  #################################
   */
  initializeChart(): void {
    $(() => {
      let data: number[] = [];
      var totalPoints = 100;

      function getRandomData() {
        if (data.length > 0) {
          data = data.slice(1);
        }

        while (data.length < totalPoints) {
          var prev = data.length > 0 ? data[data.length - 1] : 50;
          var y = prev + Math.random() * 10 - 5;

          if (y < 0) {
            y = 0;
          } else if (y > 100) {
            y = 100;
          }

          data.push(y);
        }

        var res = [];
        for (var i = 0; i < data.length; ++i) {
          res.push([i, data[i]]);
        }

        return res;
      }

      var interactive_plot = $.plot($(this.interactiveElement.nativeElement), [
          {
            data: getRandomData(),
          }
        ],
        {
          grid: {
            borderColor: '#f3f3f3',
            borderWidth: 1,
            tickColor: '#f3f3f3'
          },
          series: {
            color: '#3c8dbc',
            lines: {
              lineWidth: 2,
              show: true,
              fill: true,
            },
          },
          yaxis: {
            min: 0,
            max: 100,
            show: true
          },
          xaxis: {
            show: true
          }
        });

      var updateInterval = 500;
      var realtime = 'on';

      function update() {
        interactive_plot.setData([getRandomData()]);
        interactive_plot.draw();
        if (realtime === 'on') {
          setTimeout(update, updateInterval);
        }
      }

      if (realtime === 'on') {
        update();
      }

      $('#realtime .btn').click(() => {
        if ($(this).data('toggle') === 'on') {
          realtime = 'on';
        } else {
          realtime = 'off';
        }
        update();
      });
    });
  }

}
