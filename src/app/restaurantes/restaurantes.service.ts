import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DetailsRestaurante } from './detalhe-restaurantes/detalhe-restaurantes.model';
import { MEAT_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';
import { MenuItem } from '../content-restaurantes/menu-item/menu-item.model';

@Injectable()
export class RestaurantesService{
    constructor(private http: HttpClient){}

    restaurantes(search?: string): Observable<DetailsRestaurante[]>{

        let params: HttpParams = undefined;
        if(search){
            params = new HttpParams().append('q', search);
        }

        return this.http.get<DetailsRestaurante[]>(`${MEAT_API}/restaurants`, {params: params});
    }
    restaurantesById(id:string): Observable<DetailsRestaurante>{
        return this.http.get<DetailsRestaurante>(`${MEAT_API}/restaurants/${id}`);
    }
    reviewsOfRestaurente(id:string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
    }
    menuOfRestaurante(id:string): Observable<MenuItem[]>{
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
    }
}