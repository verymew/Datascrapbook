import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-terceira',
  standalone: true,
  imports: [],
  templateUrl: './terceira.component.html',
  styleUrl: './terceira.component.css'
})
export class TerceiraComponent implements OnInit {
  novo: echarts.ECharts | undefined;
  public title:string = "";

  private first = {
    title: "Média de salário anual (em doláres)",
    option: {
      xAxis: {
        data: ['US', 'Suíça', 'JP', 'BR', 'IN']
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [70, 65, 50, 20, 15]
        }
      ]
    }
  }

  private second = {
    title: "Média de idade",
    option: {
      xAxis: {
        data: ['Us', 'Suíça', 'JP', 'BR', 'IN']
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [32, 31, 31, 27, 25]
        }
      ]
    }
  }


  private state = new Map();

  constructor() {
    this.state.set("first", this.first);
    this.state.set("second", this.second);
  }

  ngOnInit(): void {
    const chartDom = document.getElementById('secondgraphic');
    if (chartDom) {
      this.novo = echarts.init(chartDom);
      this.novo.setOption(this.first.option);
    } else {
      console.error('Elemento com ID "main" não encontrado!');
    }
  }

  changeState(state: string): void {
    let getopt = this.state.get(state);
    this.title = getopt.title;
    this.novo?.setOption(getopt.option);
  }
}
