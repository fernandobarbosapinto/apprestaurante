import { Component, OnInit, Input } from '@angular/core';
import { DetailsRestaurante } from './detalhe-restaurantes.model';

import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'mt-detalhe-restaurantes',
  templateUrl: './detalhe-restaurantes.component.html',
  animations:[
    trigger('restaurantAppeared',[
      state('ready',style({opacity: 1})),
      transition('void => ready',[
        style({opacity:0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class DetalheRestaurantesComponent implements OnInit {

  restaurantState = 'ready'

  @Input() detailsRestaurante: DetailsRestaurante;

  constructor() { }

  ngOnInit() {
    
  }

}
