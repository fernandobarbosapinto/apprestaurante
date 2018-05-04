import { CarrinhoItem } from "./carrinho-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class CarrinhoComprasService{
    items: CarrinhoItem[] = []

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
    }

    removeItem(item:CarrinhoItem){
        this.items.splice(this.items.indexOf(item), 1);
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