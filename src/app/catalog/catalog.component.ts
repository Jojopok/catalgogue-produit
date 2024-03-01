import { Component } from '@angular/core';
import { Product } from '../model/product.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  
  products: Product[] = [
    { id: 1, name: 'Chips', price: 2, promo: '10%' },
    { id: 2, name: 'Salade', price: 3, promo: '20%' },
    { id: 3, name: 'Tomate', price: 2 },
    { id: 4, name: 'Oignon', price: 2, promo: '40%' },
    { id: 5, name: 'Pain', promo: '50%' },
  ];
}
