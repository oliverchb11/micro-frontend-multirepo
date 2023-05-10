import { Component } from '@angular/core';
import { ComponentesService } from 'componentes';
import { PopupsService } from 'projects/popups/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libraries-safe';
  constructor(private cs: ComponentesService, private popupsService: PopupsService){
    
  }

  public send(txt: string){
    console.log(txt);
    this.popupsService.altertSucces('Genial funciono', 'success', '#E03030')
  }
  
}
