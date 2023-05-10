import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class PopupsService {

  constructor() { }

  public altertSucces(title: string, icon: any, background: string){
    Swal.fire({
      title,
      icon,
      background
    });
  }
}
