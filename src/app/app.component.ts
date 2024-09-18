import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Category } from './service/category';
import data from '../assets/json/data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product-list-with-cart-main';

  items: Category[] = data;

  // ngOnInit(){
  //   console.log(this.items);
  //   console.log("er");
  // }

}
