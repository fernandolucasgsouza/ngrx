import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CartModel } from 'src/app/models';
import { Observable } from 'rxjs';
import { Remove, Clear } from 'src/app/actions';

@Component({
  selector: 'fs-product-shopping',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ProductShoppingComponent implements OnInit {

  public products;
  public cart$: Observable<CartModel>;

  constructor(private store: Store<{ cart: CartModel }>) {
    this.cart$ = store.pipe(select('cart'));
  }

  ngOnInit(): void { }

  async remove(product) {
    this.store.dispatch(Remove(product));
    console.log('produto removido:', product);
  }

  async reset() {
    this.store.dispatch(Clear());
    console.log('todos itens removidos:');
  }

}
