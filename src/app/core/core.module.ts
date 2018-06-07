import { NgModule } from '@angular/core';

import { RestaurantesService } from '../restaurantes/restaurantes.service';
import { CarrinhoComprasService } from '../content-restaurantes/carrinho-compras/carrinho-compras.service';
import { OrderService } from '../order/order.service';

@NgModule({
    providers:[RestaurantesService, CarrinhoComprasService, OrderService]
})

export class CoreModule{}