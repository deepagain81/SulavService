import { Injectable } from '@angular/core';
import { IProduct } from './productlist/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProduct(): IProduct[]{
    return [{
      "Name": 'Iphone',
      "Price": 999,
      "Brand": "Apple",
      "Rating": 4.45
      }, {
      "Name": "Gallaxy Note 9",
      "Price": 1199,
      "Brand": "Samsung",
      "Rating": 4.5

    }]
  }//end get
}//end clss
