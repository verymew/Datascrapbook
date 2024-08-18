import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-segunda',
  standalone: true,
  imports: [],
  templateUrl: './segunda.component.html',
  styleUrl: './segunda.component.css'
})
export class SegundaComponent implements OnInit{
  myChart: echarts.ECharts | undefined;
  public title = "";
  private firstgrap = {
    title: "Porcentagem de trabalhadores com doenças mentais",
    option: {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)' // Exemplo de uso dos placeholders
      },
      series: [
        {
          name: 'Data', // Isso é o que {a} irá mostrar
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}: {d}%' // {b} é o nome da fatia, {d} é a porcentagem
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 575, name: 'Possui' }, // {b} será 'A', {c} será 335
            { value: 531, name: 'Não possui' }, // {b} será 'B', {c} será 234
            { value: 327, name: 'Talvez' }
          ]
        }
      ]
    },
  };

  ngOnInit(): void {
    const chartDom = document.getElementById('firstgraphic');
    if (chartDom) {
      this.myChart = echarts.init(chartDom);
      this.myChart.setOption(this.firstgrap.option);
      this.title = this.firstgrap.title;
    } else {
      console.error('Elemento com ID "main" não encontrado!');
    }
  }

  changeState(): void{

  }
}

