import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputSelectService {

  constructor() { }

  public alertarSeleccion(option: string) {
    return alert(option)
  }
}
