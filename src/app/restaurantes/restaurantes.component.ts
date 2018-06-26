import { Component, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DetailsRestaurante } from './detalhe-restaurantes/detalhe-restaurantes.model';
import { RestaurantesService } from './restaurantes.service';

import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  animations:[
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantesComponent implements OnInit {

  searchBarState = 'hidden';
  restaurantes: DetailsRestaurante[]

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private restaurantesService: RestaurantesService,
              private fb: FormBuilder
              ) { }

  ngOnInit() {

    this.searchControl = this.fb.control('');

    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      // .do(searchTerm => console.log(`q=${searchTerm}`))
      .switchMap(searchTerm =>
        this.restaurantesService.restaurantes(searchTerm))
      .subscribe(restaurantes => this.restaurantes = restaurantes);

    this.restaurantesService.restaurantes()
      .subscribe(restaurantes => this.restaurantes = restaurantes);
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
