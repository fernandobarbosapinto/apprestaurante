import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService} from './carrinho-compras.service';

import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'mt-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  animations:[
    trigger('row',[
      state('ready',style({opacity:1})),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({opacity:0, transform: 'translateX(-30px)', offset:0}),
        style({opacity:0.8, transform: 'translateX(10px)', offset:0.8}),
        style({opacity:1, transform: 'translateX(0px)', offset:1})
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({opacity:1, transform: 'translateX(0px)', offset:0}),
        style({opacity:0.8, transform: 'translateX(-10px)', offset:0.2}),
        style({opacity:0, transform: 'translateX(30px)', offset:1})
      ])))
    ])
  ]
})
export class CarrinhoComprasComponent implements OnInit {

  rowState = 'ready';

  constructor(private carrinhoComprasService: CarrinhoComprasService) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.carrinhoComprasService.items;
  }

  clear(){
    this.carrinhoComprasService.clearItens();
  }

  removeItem(item: any){
    this.carrinhoComprasService.removeItem(item);
  }

  addItem(item: any){
    this.carrinhoComprasService.addItem(item);
  }

  total(): number{
    return this.carrinhoComprasService.total();
  }

}
