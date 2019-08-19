import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductlistComponent, ProductdetailComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path:'product', component:ProductlistComponent},
      {path:'Productdetail/:id',component:ProductdetailComponent}

    ])
  ]
})
export class ProductModule { }
