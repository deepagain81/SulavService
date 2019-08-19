import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../product.service';

@Component({
  //selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  pageTitle: string = 'Product list';
  products: IProduct[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.products = this._productService.getProduct();
  }
  //toggle image method

}
