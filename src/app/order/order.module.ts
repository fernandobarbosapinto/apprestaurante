import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './order.component';
import { OrderItensComponent } from './order-itens/order-itens.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';

import { SharedModule } from '../shared/shared.module';
import { LeaveOrderGuard } from './leave-order.guard';

const ROUTES: Routes =[
    {path:'', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
]

@NgModule({
    declarations:[
        OrderComponent,
        OrderItensComponent,
        DeliveryCostsComponent
    ],
    imports:[
        SharedModule,
        RouterModule.forChild(ROUTES)
    ]
})

export class OrderModule{}
