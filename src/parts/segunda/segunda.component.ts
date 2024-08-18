import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-segunda',
  standalone: true,
  imports: [],
  templateUrl: './segunda.component.html',
  styleUrl: './segunda.component.css'
})
export class SegundaComponent implements OnInit{
  public myChart: echarts.ECharts | undefined;
  public title = "";
  private firstgrap = {
    title: "Porcentagem de trabalhadores com doenças mentais",
    option: {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: 'Data',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}: {d}%'
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 575, name: 'Possui' },
            { value: 531, name: 'Não possui' },
            { value: 327, name: 'Talvez' }
          ]
        }
      ]
    },
  };

  private secondgrap = {
    title: "Transtornos mentais prevalentes",
    option: {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: 'Data',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}: \n {d}%'
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 526, name: 'TH' },
            { value: 373, name: 'TA' },
            { value: 134, name: 'TDAH' },
            { value: 70, name: 'TEPT' },
          ]
        }
      ]
    },
  };
  private thirdgrap = {
    title: "Porcentagem por sexo",
    option: {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: 'Data',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}: {d}%'
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 1025, name: 'Homem' },
            { value: 309, name: 'Mulher' },
          ]
        }
      ]
    },
  };
  private states = new Map();

  constructor(){
    this.states.set('first', this.firstgrap);
    this.states.set('second', this.secondgrap);
    this.states.set('third', this.thirdgrap);
  }

  ngOnInit(): void {
    const chartDom = document.getElementById('firstgraphic');
    if (chartDom) {
      this.myChart = echarts.init(chartDom);
      this.myChart.setOption(this.firstgrap.option);
      this.title = this.firstgrap.title;
    }
  }

  changeState(state:string): void{
    let getopt = this.states.get(state);
    this.title = getopt.title;
    this.myChart?.setOption(getopt.option);
  }
}

