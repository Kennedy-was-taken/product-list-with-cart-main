import { Injectable } from '@angular/core';
import { Goods } from '../../interface/goods';
import { Category } from '../../interface/category';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  constructor() { }

  items : Goods[] = [];


  //add to list
  public addItem(item : Category) : void{

    const itemGoods: Goods = {
      name: item.name,
      category: item.category,
      total: item.price,
      quantity: 1,
      price: item.price
    };

    this.items.push(itemGoods);
  }

  public increaseItem(item : Category) : void{

    const index = this.items.findIndex(x => x.name === item.name && x.category === item.category);
    if(index !== -1){
      const quantityIncreased: Goods = {
        name: this.items[index].name,
        category: this.items[index].category,
        total: this.items[index].total + item.price,
        quantity: this.items[index].quantity + 1,
        price: this.items[index].price
      };
      
      this.items[index] = quantityIncreased;
    }
  }

  public decreaseItem(item : Category) : void{
    
    const index = this.items.findIndex(x => x.name === item.name && x.category === item.category);
    if(index !== -1){
      if(this.items[index].quantity === 1){
        this.items.splice(index);
      }
      else{

        const quantityReduce: Goods = {
          name: this.items[index].name,
          category: this.items[index].category,
          total: this.items[index].total - item.price,
          quantity: this.items[index].quantity - 1,
          price: this.items[index].price
        };
        
        this.items[index] = quantityReduce
      }
    }
  }

  public doesItemExist(item : Category) : boolean{
    const index = this.items.findIndex(x => x.name === item.name && x.category === item.category);
    if(index !== -1){
      return true;
    }
    else{
      return false;
    }
  }

  public removeItem(cart : Goods){
    const index = this.items.findIndex(x => x.name === cart.name && x.category === cart.category);

    this.items.splice(index);
  }


  public returnItemArray() : Goods[]{
    return this.items;
  }
}
