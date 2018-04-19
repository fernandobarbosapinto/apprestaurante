import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantesService } from '../restaurantes/restaurantes.service';
import { DetailsRestaurante } from '../restaurantes/detalhe-restaurantes/detalhe-restaurantes.model';
@Component({
  selector: 'mt-content-restaurantes',
  templateUrl: './content-restaurantes.component.html'
})
export class ContentRestaurantesComponent implements OnInit {

  restaurante: DetailsRestaurante;

  constructor(private restaurantService: RestaurantesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantesById(this.route.snapshot.params['id'])
      .subscribe(restaurante => this.restaurante = restaurante)
  }

}
