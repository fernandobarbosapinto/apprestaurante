import { Injectable } from "@angular/core";
import { CarrinhoComprasService } from '../content-restaurantes/carrinho-compras/carrinho-compras.service';
import { CarrinhoItem } from '../content-restaurantes/carrinho-compras/carrinho-item.model';

@Injectable()

export class OrderService{

    constructor(private carrinhoComprasService: CarrinhoComprasService){}

    itemsValue(): number{
        return this.carrinhoComprasService.total();
    }

    cartItems(): CarrinhoItem[]{
        return this.carrinhoComprasService.items
    }

    increaseQty(item: CarrinhoItem){
        this.carrinhoComprasService.increaseQty(item);
    }

    decreaseQty(item: CarrinhoItem){
        this.carrinhoComprasService.decreaseQty(item);
    }

    remove(item: CarrinhoItem){
        this.carrinhoComprasService.removeItem(item);
    }
}