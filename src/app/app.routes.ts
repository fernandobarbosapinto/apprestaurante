import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

import { ContentRestaurantesComponent } from './content-restaurantes/content-restaurantes.component';
import { MenuComponent } from './content-restaurantes/menu/menu.component';
import { ReviewsComponent } from './content-restaurantes/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { LoggedInGuard } from './security/login/loggedin.guard';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'login/:to', component: LoginComponent},
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'restaurantes/:id', component: ContentRestaurantesComponent,
        children:[
            {path:'', redirectTo: 'menu', pathMatch: 'full'},
            {path:'menu', component: MenuComponent},
            {path:'reviews', component: ReviewsComponent}
        ]
    },
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'order', loadChildren: './order/order.module#OrderModule', canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]},
    {path: '**', component: NotFoundComponent}
]
