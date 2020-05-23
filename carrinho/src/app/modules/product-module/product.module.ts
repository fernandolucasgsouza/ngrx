import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { ProductDashboardComponent, ProductListComponent, ProductShoppingComponent } from './components';
import { ProductFooterComponent } from './components/product-footer/product-footer.component';




@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductListComponent, 
    ProductShoppingComponent,
    ProductFooterComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  exports:[
    ProductDashboardComponent,
    ProductListComponent, 
    ProductShoppingComponent,
    ProductFooterComponent
  ]
})
export class ProductModule { }
