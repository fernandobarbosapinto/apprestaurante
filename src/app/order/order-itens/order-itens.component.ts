import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarrinhoItem } from '../../content-restaurantes/carrinho-compras/carrinho-item.model';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() itens: CarrinhoItem[]

  @Output() increaseQty = new EventEmitter<CarrinhoItem>();
  @Output() decreaseQty = new EventEmitter<CarrinhoItem>();
  @Output() remove = new EventEmitter<CarrinhoItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CarrinhoItem){
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CarrinhoItem){
    this.decreaseQty.emit(item);
  }

  emitRemove(item: CarrinhoItem){
    this.remove.emit(item);
  }

}
