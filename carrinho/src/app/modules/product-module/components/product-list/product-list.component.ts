import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { BaseService } from 'src/app/core/services/base-service/base.service';
import { CartModel, ProductModel } from 'src/app/models';
import { Add } from 'src/app/actions/cart.action';

@Component({
  selector: 'fs-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: ProductModel[] = null;

  constructor(
    private store: Store<CartModel>,
    private baseSerice: BaseService
  ) { }

  ngOnInit(): void {
    this.baseSerice.getProducts().subscribe((resp)=>{
      this.products = resp;
    });
  }

    async add(product){
      this.store.dispatch(Add(product));
      console.log(`${product.title} adicionado ao carrinho`)
    }


}
