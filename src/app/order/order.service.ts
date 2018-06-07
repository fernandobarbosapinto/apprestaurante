import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CarrinhoComprasService } from '../content-restaurantes/carrinho-compras/carrinho-compras.service';
import { CarrinhoItem } from '../content-restaurantes/carrinho-compras/carrinho-item.model';
import { Order, OrderItem } from './order.model';
import { MEAT_API } from '../app.api'

@Injectable()

export class OrderService{

    constructor(private carrinhoComprasService: CarrinhoComprasService, private http: Http){}

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
        const headers = new Headers();
        headers.append('Content-type','application/json');
        return this.http.post(`${MEAT_API}/orders`, 
                                JSON.stringify(order),
                                new RequestOptions({headers: headers}))
                        .map(response => response.json())
                        .map(order => order.id)
    }
}