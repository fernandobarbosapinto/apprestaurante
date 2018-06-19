import { CarrinhoItem } from "./carrinho-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "../../shared/messages/notification.service";

@Injectable()

export class CarrinhoComprasService{
    items: CarrinhoItem[] = []

    constructor(private notificationService: NotificationService){}

    clearItens(){
        this.items = [];
    }

    addItem(item:MenuItem){
        let procurarItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
        if(procurarItem){
            this.increaseQty(procurarItem);
        }else{
            this.items.push(new CarrinhoItem(item));
        }
        this.notificationService.notify(`Você adicionou um item ${item.name}`);
    }

    removeItem(item:CarrinhoItem){
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify(`Você removeu um item ${item.menuItem.name}`);
    }

    total():number{
        return this.items
            .map(item => item.value())
                .reduce((prev, value) => prev+value, 0);
    }

    increaseQty(item: CarrinhoItem){
        item.quantity = item.quantity + 1;
    }

    decreaseQty(item: CarrinhoItem){
        item.quantity = item.quantity - 1;
        if(item.quantity === 0){
            this.removeItem(item);
        }
    }
}