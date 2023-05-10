import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';


import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsComponent } from './products.component';
import { InputSelectModule } from 'safe-input-select-component';

import { ComponentesModule } from 'safe-componentes';
import { PopupsModule } from 'safe-popups';


const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  declarations: [ProductsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ProductCardComponent, InputSelectModule, ComponentesModule, PopupsModule],
  providers: []
})
export class ProductsModule {}