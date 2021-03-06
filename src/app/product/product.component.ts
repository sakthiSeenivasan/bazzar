import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import * as bootstrap from 'bootstrap';
import { CommonModule } from '@angular/common';
// import { Status } from '../status.enum';
import { Status } from '../core/enums';
import { Wishlist } from '../core/enums';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import {BasePage} from '../core/base.page';
import * as phoneLib from 'google-libphonenumber';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends BasePage implements OnInit {
  products$: Observable<any> | undefined;
  viewProducts: any;
  addedCart: any;
  view: any;
  wishlist: any;
  viewWishlist: any;
  views: any[] = [];
  cartCount: any;
  count = 0;
  check:any;
  
  constructor(private fs: FirestoreService, private router: Router) {
    super();
    this.products$ = this.fs.col$(`Product`).pipe(tap(data => {
      this.cartCount = data;
      console.log(this.cartCount)
      return data;
      // const number = phoneLib.parseAndKeepRawInput('202-456-1414', 'US');
      // console.log(number.getCountryCode());
      // phoneUtil.isValidNumberForRegion(phoneUtil.parse('202-456-1414', 'US'), 'US');
      const phoneLibInstance = phoneLib.PhoneNumberUtil.getInstance();
        const phoneNumber = phoneLibInstance.parse('');
        const isValidNumber = phoneLibInstance.isValidNumber(phoneNumber);
    }));
  }
  ngOnInit() {
    console.log('Hello World');
  }
  viewProduct(product: any) {
    this.viewProducts = product;
    this.view = new bootstrap.Modal(<any>document.getElementById('addProduct'));
    this.view.show();
  }
  async addtoCart() {
    if (this.viewProducts.status === Status.InCart) {
      this.addedCart = 'Its already added in cart';
    } else {
      await this.fs.update(`Product/${this.viewProducts._id}`, {
        status: Status.InCart
      });
      // window.location.reload();
      this.view.hide();
    }
  }
  hideEnableCart() {
    this.addedCart = null;
  }
  addToWishlist(product: any) {
    this.viewWishlist = product;
    this.wishlist = new bootstrap.Modal(<any>document.getElementById('viewCart'));
    this.wishlist.show();
  }
   async addingLikes() {
   await this.fs.update(`Product/${this.viewWishlist._id}`, {
      wishlist: Wishlist.Like
    })
    this.wishlist.hide();
    window.location.reload();
  }
  async addingDislikes() {
    await this.fs.update(`Product/${this.viewWishlist._id}`, {
      wishlist: Wishlist.DisLike
    })
    this.wishlist.hide();
    window.location.reload();
  }
  gotoCart() {
    this.router.navigate(['/cart'])
  }
  gotoWishlist() {
    this.router.navigate(['/wishlist']);
  }
 filterProducts(){
   this.check = new bootstrap.Dropdown(<any>document.getElementById('filter'));
   this.check.show();
  }
  // this.check.hide();
}

function value(value: any) {
  throw new Error('Function not implemented.');
}
