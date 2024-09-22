import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Category } from './interface/category';
import { NgFor, NgStyle } from '@angular/common';
import { LogicService } from './service/logic/logic.service';
import { Goods } from './interface/goods';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import data from '../assets/json/data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product-list-with-cart-main';

  constructor(private service : LogicService, private breakpointObserver : BreakpointObserver){}

  itemNumber : number | undefined;

  items: Category[] | undefined ;

  cartList: Goods[] | undefined;

  selecteData = data[0];

  //used to display items in the cart
  public getItemList() : void {
    this.cartList = this.service.returnItemArray();
  }

  public AddCart(item : Category, index: number) : void {

    // let content = event.target;
    const divId =  document.getElementById(item.category) as HTMLElement;
    const addBtn = document.getElementById('add_to_cart_' + item.category) as HTMLElement;
    const moreBtn = document.getElementById('more_to_cart_' + item.category) as HTMLElement;

    //switch to the second button
    addBtn.style.display = "none";
    moreBtn.style.display = "flex"

    //adds item
    this.service.addItem(item);

    //increase item
    this.service.increaseItem(item);

    //sets the border color
    divId.style.border = "2px solid #c25c36" ;
    
  }

  public decreaseCart(item : Category) : void{
    const divId =  document.getElementById(item.category) as HTMLElement;
    let subtractQuantity = document.getElementById('quantity_' + item.category) as HTMLElement;
    const addBtn = document.getElementById('add_to_cart_' + item.category) as HTMLElement;
    const moreBtn = document.getElementById('more_to_cart_' + item.category) as HTMLElement;

    
    let exist : boolean = this.service.doesItemExist(item);

    if(!exist){

      //switch to the first button
      addBtn.style.display = "flex"
      moreBtn.style.display = "none";

      //unset the border color
      divId.style.border = "unset" ;
    }

    else{
      this.service.decreaseItem(item);
      
      if(subtractQuantity.innerText == "1"){
        this.decreaseCart(item); //recursion
      }
      else{
        subtractQuantity.innerText = String(Number(subtractQuantity.innerText) - 1);
      }
    }
  }

  public IncreaseCart(item : Category) : void{
    let addQuantity = document.getElementById('quantity_' + item.category) as HTMLElement;

    this.service.increaseItem(item);

    addQuantity.innerText = String(Number(addQuantity.innerText) + 1);
  }

  ngOnInit() : void{
    this.items = data;
  }

}
