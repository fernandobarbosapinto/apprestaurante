import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItensComponent } from './order/order-itens/order-itens.component';
import { OrderService } from './order/order.service';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RatingComponent } from './shared/rating/rating.component';

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
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItensComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [RestaurantesService, CarrinhoComprasService, OrderService, {provide: LOCALE_ID, useValue:'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
