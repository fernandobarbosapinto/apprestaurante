import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DetalheRestaurantesComponent } from './restaurantes/detalhe-restaurantes/detalhe-restaurantes.component';
import { RestaurantesService } from './restaurantes/restaurantes.service';
import { ContentRestaurantesComponent } from './content-restaurantes/content-restaurantes.component';
import { MenuComponent } from './content-restaurantes/menu/menu.component';
import { CarrinhoComprasComponent } from './content-restaurantes/carrinho-compras/carrinho-compras.component';
import { MenuItemComponent } from './content-restaurantes/menu-item/menu-item.component';
import { ReviewsComponent } from './content-restaurantes/reviews/reviews.component';
import { CarrinhoComprasService } from './content-restaurantes/carrinho-compras/carrinho-compras.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    DetalheRestaurantesComponent,
    ContentRestaurantesComponent,
    MenuComponent,
    CarrinhoComprasComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantesService, CarrinhoComprasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
