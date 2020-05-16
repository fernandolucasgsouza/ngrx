import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { CartModel } from "src/app/models";


@Component({
  selector: 'fs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cart$: Observable<CartModel>

  protected cart:CartModel
  constructor(private store: Store<{cart:CartModel}>) {
    this.cart$ = this.store.pipe(select('cart'));
    console.log(this.cart$);
  }

  ngOnInit(): void {
  }

}
