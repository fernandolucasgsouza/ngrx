import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { ProductDashboardComponent, ProductListComponent, ProductShoppingComponent } from './components';




@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductListComponent, 
    ProductShoppingComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports:[
    ProductDashboardComponent,
    ProductListComponent, 
    ProductShoppingComponent,

  ]
})
export class ProductModule { }
