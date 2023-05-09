import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'safe-loading',
  template: `
  <h1>Loading...</h1>

<mat-spinner [color]="color"></mat-spinner>

  `,  
  styles: [
    `
    .mat-progress-spinner{
      background-color: red;
    }
    .efectos {
      z-index: 1000;
    /* border: 1px solid #d8d8d8; */
    position: fixed;
    /* background: #fbfbfb; */
    right: 0px;
    top: 70PX;
    width: 100px;
    text-align: center;
    border-bottom-left-radius: 10px;

}
    `
  ]
})
export class LoadingComponent implements OnInit, OnChanges{
  @Input() public loading: any;
  @Input() public color: string;
  public cargando: boolean;
  public mode:  ProgressSpinnerMode ;
  public value: number;

  ngOnChanges() {
    this.cargando = this.loading;
  }
  ngOnInit(): void {
    this.mode = 'determinate';
    this.value = 50;
  }
}
