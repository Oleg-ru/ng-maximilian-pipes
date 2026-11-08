import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';
import {TemperaturePipe} from './temperature-pipe';
import {SortPipe} from './sort-pipe';

@Component({
  imports: [
    DatePipe,
    TemperaturePipe,
    SortPipe
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  constructor() {
    this.historicTemperatures.sort((a,b) => a > b ? 1 : -1)
  }

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
    // const newTemp = [...this.historicTemperatures]
    // newTemp[index] = 33;
    // this.historicTemperatures = newTemp;
  }
}
