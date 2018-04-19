import { Component, OnInit, Input } from '@angular/core';
import { DetailsRestaurante } from './detalhe-restaurantes.model';
@Component({
  selector: 'mt-detalhe-restaurantes',
  templateUrl: './detalhe-restaurantes.component.html'
})
export class DetalheRestaurantesComponent implements OnInit {

  @Input() detailsRestaurante: DetailsRestaurante;

  constructor() { }

  ngOnInit() {
    
  }

}
