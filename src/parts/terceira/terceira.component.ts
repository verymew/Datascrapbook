import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-terceira',
  standalone: true,
  imports: [],
  templateUrl: './terceira.component.html',
  styleUrl: './terceira.component.css'
})
export class TerceiraComponent implements OnInit{
  novo: echarts.ECharts | undefined;
  private option = {
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
  private teste = new Map();

  constructor()
  {
    this.teste.set("first", this.option);
  }

  ngOnInit(): void {
    const chartDom = document.getElementById('secondgraphic');
    if (chartDom) {
      this.novo = echarts.init(chartDom);
      this.novo.setOption(this.option);
    } else {
      console.error('Elemento com ID "main" não encontrado!');
    }
  }

  changeState(): void
  {

  }
}
