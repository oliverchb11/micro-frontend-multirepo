import { Component } from '@angular/core';

@Component({
  selector: 'lib-componentes',
  template: `
  <button class="btn-minimalista">Haz clic aquí por favor..</button>
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

}
