import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-product-list',
  imports: [],
  templateUrl: './seller-product-list.component.html',
  styleUrl: './seller-product-list.component.css'
})
export class SellerProductListComponent implements OnInit {
  productList: any[] = [];

  constructor(private sellerService: SellerService) {}

  ngOnInit(): void {
    this.loadProductList();
  }

  loadProductList(): void {
    this.sellerService.getSellerProducts().subscribe({
      next: (response) => {
        if (response.status === 200) {
          this.productList = response.body || [];
        }
      },
      error: (error) => {
        console.error('Error fetching product list:', error);
      }
    });
  }
  
}
