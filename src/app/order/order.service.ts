import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CarrinhoComprasService } from '../content-restaurantes/carrinho-compras/carrinho-compras.service';
import { CarrinhoItem } from '../content-restaurantes/carrinho-compras/carrinho-item.model';
import { Order, OrderItem } from './order.model';
import { MEAT_API } from '../app.api'

@Injectable()

export class OrderService{

    constructor(private carrinhoComprasService: CarrinhoComprasService, private http: HttpClient){}

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

    clear(){
        this.carrinhoComprasService.clearItens();
    }

    checkOrder(order:Order): Observable<string>{
        return this.http.post<Order>(`${MEAT_API}/orders`, order)
                        .map(order => order.id)
    }
}