import { Component, Output,EventEmitter } from '@angular/core';
import { ComponentesService } from './componentes.service';

@Component({
  selector: 'lib-componentes',
  template: `
  <button class="btn-minimalista" (click)="send('enviado')">Haz clic aquí por favor..</button>
  `,
  styles: [
    `
    .btn-minimalista {
  background-color: transparent;
  border: 1px solid #999;
  color: #999;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.btn-minimalista:hover {
  background-color: #999;
  color: #fff;
  cursor: pointer;
}
    `
  ]
})
export class ComponentesComponent {

  @Output() sendOutput = new EventEmitter<string>();
  constructor(private componentService: ComponentesService){

  }
  public send(text: string){
    this.sendOutput.emit(text)
  }
}
