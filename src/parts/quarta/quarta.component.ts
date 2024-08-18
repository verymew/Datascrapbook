import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-quarta',
  standalone: true,
  imports: [],
  templateUrl: './quarta.component.html',
  styleUrl: './quarta.component.css'
})
export class QuartaComponent implements OnInit{
  novo: echarts.ECharts | undefined;
  public title:string = "";

  private scatterOption = {

    xAxis: {
      type: 'value',
      name: 'X'
    },
    yAxis: {
      type: 'value',
      name: 'Y'
    },
    series: [
      {
        type: 'scatter',
        data: [
          [70, 0.45, 'US'],
          [65, 0.30, 'Suiça'],
          [45, 0.40, 'JP'],
          [20, 0.40, 'BR'],
          [15, 0.20, 'IN'],
        ],
        label: {
          show: true,
          position: 'right',
          formatter: (params: { data: [number, number, string] }) => {
            return params.data[2]; // Retorna o rótulo associado ao ponto
          }
        }
      }
    ]
  };


  ngOnInit(): void {
    const chartDom = document.getElementById('lastgraphic');
    this.novo = echarts.init(chartDom);
    this.novo.setOption(this.scatterOption); // Use only the option part
  }

}
