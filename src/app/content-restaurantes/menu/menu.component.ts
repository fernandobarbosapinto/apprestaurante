import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantesService } from '../../restaurantes/restaurantes.service';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';
@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurentesService: RestaurantesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurentesService
      .menuOfRestaurante(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }

}
