import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading.component';
import { MaterialModule } from './material.module';
import { InputSelectModule } from 'input-select';




@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    MaterialModule,
    InputSelectModule
  ],
  exports: [
    LoadingComponent,
    InputSelectModule
  ]
})
export class LoadingModule { }
