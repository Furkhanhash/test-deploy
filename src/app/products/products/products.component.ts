import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[] = [
    { id: 1, name: 'Nike mens Air Jordan 1 Mid', price: 10, imageUrl: 'https://celestialprom.com/wp-content/uploads/2023/11/celestialprom-27-scaled-celestialprom-Untitled-celestialprom.jpg' },
    { id: 2, name: 'Nike mens Air Jordan 2 Mid', price: 20, imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png' },
    { id: 3, name: 'Nike mens Air Jordan 3 Mid', price: 30, imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ad55c31f-1de0-40d9-8563-bfc9d9c239c7/air-huarache-premium-mens-shoes-JppwBb.png' },
  ];
}
