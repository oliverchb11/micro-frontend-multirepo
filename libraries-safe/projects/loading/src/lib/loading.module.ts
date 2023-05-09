import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    LoadingComponent,
  ]
})
export class LoadingModule { }
