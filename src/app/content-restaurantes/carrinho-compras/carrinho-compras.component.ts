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

  total(): number{
    return this.carrinhoComprasService.total();
  }

}
