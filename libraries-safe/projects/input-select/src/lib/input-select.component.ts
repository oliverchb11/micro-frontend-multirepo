import { Component, Output, EventEmitter } from '@angular/core';
import { InputSelectService } from './input-select.service';

@Component({
  selector: 'gb-input-select',
  template: `
   <select name="" id="" (click)="selectOpt($event)">
    <option value="">Seleccione una opciones...</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
   </select>
  `,
  styleUrls: ['./input-select.scss']
})
export class InputSelectComponent {
  @Output() selectionOption = new EventEmitter<any>();


  constructor(private inputService: InputSelectService){

  }

  public selectOpt(option){
    this.selectionOption.emit();
    console.log(option);
  }
}
