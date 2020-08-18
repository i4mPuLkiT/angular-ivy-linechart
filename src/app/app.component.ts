import { Component, OnInit, ViewChild, TRANSLATIONS_FORMAT } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public lineChartData: ChartDataSets[] = [
    { data: [800, 2400, 770, 300, 850, 600, 1800], label: 'Debit', },{
      data: [1200, 800, 675, 550, 1600, 900, 400], label: 'Credit',
    },
  ];
  public lineChartLabels: Label[] = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgba(255,0,0,0.3)',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }
}