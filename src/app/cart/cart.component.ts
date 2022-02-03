import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore.service';
import { Status } from '../core/enums';
import { BasePage } from '../core/base.page';
import { map, tap } from 'rxjs/operators';
import { data } from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends BasePage implements OnInit {
  cart$: Observable<any> | undefined;
  cartCount: any;
  enableCart = true;
  status: any;
  // paidCount = null;
  constructor(private fs: FirestoreService, private router: Router) {
    super();
  }
  ngOnInit(): void {
    this.cart$ = this.fs.col$(`Product`, ref => ref.where('status', '==', 'In Cart')).pipe(tap(data => {
      this.cartCount = data;
      console.log(this.cartCount);
      if (this.cartCount.length === 0) {
        this.enableCart = false;
      }
      return data;
    }));
  }
  addPay() {
    this.cartCount.forEach(async (cart: any) => {
      // this.paidCount = this.cartCount.length;
      if (cart.status === 'In Cart') {
        await this.fs.update(`Product/${cart._id}`, {
          status: Status.Paid
        })
        this.router.navigate(['/order']);
      }
    });
  }
  gotoProduct() {
    this.router.navigate(['/product']);
  }
  gotoOrder() {
    this.router.navigate(['/order']);
  }
  async deleteCart(cart: any) {
    this.status = cart;
    await this.fs.update(`Product/${this.status._id}`, {
      status:''
    });
    window.location.reload();
  }
}
