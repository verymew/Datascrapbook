import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-segunda',
  standalone: true,
  imports: [],
  templateUrl: './segunda.component.html',
  styleUrl: './segunda.component.css'
})
export class SegundaComponent implements AfterViewInit{
  myChart: echarts.ECharts | undefined;

  ngAfterViewInit(): void {
    const chartDom = document.getElementById('firstgraphic');
    if (chartDom) {
      this.myChart = echarts.init(chartDom);

      const option = {
        title: {
          text: 'World Population'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        series: [
          {
            name: '2011',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2012',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      };

      this.myChart.setOption(option);
    } else {
      console.error('Elemento com ID "main" não encontrado!');
    }
  }
}

