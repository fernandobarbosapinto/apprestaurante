import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DetailsRestaurante } from './detalhe-restaurantes/detalhe-restaurantes.model';
import { MEAT_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';
import { MenuItem } from '../content-restaurantes/menu-item/menu-item.model';

@Injectable()
export class RestaurantesService{
    constructor(private http: Http){}

    restaurantes(search?: string): Observable<DetailsRestaurante[]>{
        return this.http.get(`${MEAT_API}/restaurants`, {params:{q: search}})
            .map(response => response.json())
                .catch(ErrorHandler.handlerError);
    }
    restaurantesById(id:string): Observable<DetailsRestaurante>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
                .catch(ErrorHandler.handlerError);
    }
    reviewsOfRestaurente(id:string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
                .catch(ErrorHandler.handlerError);
    }
    menuOfRestaurante(id:string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
            .map(response => response.json())
                .catch(ErrorHandler.handlerError);
    }
}