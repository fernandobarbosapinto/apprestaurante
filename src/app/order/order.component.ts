import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CarrinhoItem } from '../content-restaurantes/carrinho-compras/carrinho-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label:'Dinheiro', value: 'MON'},
    {label:'Cartão de Débito', value: 'DEB'},
    {label:'Cartão de Refeição', value: 'REF'}
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue(): number{
    return this.orderService.itemsValue()
  }

  cartItems(): CarrinhoItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CarrinhoItem){
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CarrinhoItem){
    this.orderService.decreaseQty(item);
  }

  remove(item: CarrinhoItem){
    this.orderService.remove(item);
  }

}
