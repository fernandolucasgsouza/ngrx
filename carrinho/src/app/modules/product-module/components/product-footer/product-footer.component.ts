import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'fs-product-footer',
  templateUrl: './product-footer.component.html',
  styleUrls: ['./product-footer.component.css']
})
export class ProductFooterComponent implements OnInit {

  cart$:Observable<CartModel>;

  constructor(private store:Store<{cart: CartModel}>) { }

  ngOnInit(): void {
    this.cart$ = this.store.pipe(select('cart'));
  }

}
