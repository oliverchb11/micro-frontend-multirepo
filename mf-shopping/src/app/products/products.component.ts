import { Component } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { IProductCard } from '../models/product-card.interface';
import {ComponentesService} from 'safe-componentes'
import {PopupsService} from 'safe-popups'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private _animeService: AnimeService, private cs: ComponentesService, private popupsService: PopupsService) {}
  products: IProductCard[] = [];

  ngOnInit(): void {
    this._animeService.getAnimes().subscribe((response) => {
      console.log(response);
      this.products = response;
    });
  }

  public sendInfo(data: string){
    console.log(data);
    this.popupsService.altertSucces('genial llamado la liberia poppus desde mi micro frontent de shopping', 'success', '#E03030')
  }
}
