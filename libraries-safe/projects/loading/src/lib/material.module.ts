import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
 



@NgModule({
  declarations: [

  ],
  imports: [
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatButtonModule,
  
  ],
  exports: [
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
