import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any =[]
  public productList = new BehaviorSubject <any>([]);
  constructor() { }
  getProducts(){
    return  this.productList.asObservable();
    }
    setproduct(product : any){
      this.cartItemList.push(...product);
      this.productList.next(product);
    }
    addtocart(product : any){
      this.cartItemList.push(product);
      this.productList. next (this.cartItemList);
      this.getTotalprice();
      console.log(this.cartItemList);
    }
    getTotalprice() :number{
      let grandTotal=0;
      this.cartItemList.map((a:any)=>{
        grandTotal += a.total;
      })
      return grandTotal;
    }
    removeCartItem(product :any){
      this.cartItemList((a:any, index:any)=>{
        if(product.id=== a.id){
          this.cartItemList.splice(index,1);
        }
      })
      this.productList.next(this.cartItemList);
    }
    removeAllCartItem(){
      this.cartItemList = []
  
      this.productList.next(this.cartItemList);
    }
}
