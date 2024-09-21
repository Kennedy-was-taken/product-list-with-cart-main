import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Category } from './service/category';
import data from '../assets/json/data.json';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product-list-with-cart-main';

  items: Category[] = data;

  selectedData = this.items[0];


  public AddCart(item : Category) : void {
    // let content = event.target;
    
    console.log(item.category);
    console.log(item.name);
    console.log('$' + item.price);
    // if(content .contains('btnAdd')){
    //   console.log(1);
    // }
  }

  // ngOnInit(){
  //   console.log(this.items);
  //   console.log("er");
  //   console.log();
  // }

}
