import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService} from './carrinho-compras.service';
@Component({
  selector: 'mt-carrinho-compras',
  templateUrl: './carrinho-compras.component.html'
})
export class CarrinhoComprasComponent implements OnInit {

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
