import { Component, OnInit } from '@angular/core';
import { AngularFirestore, validateEventsArray } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore.service';
import * as bootstrap from 'bootstrap';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  editProductForm: FormGroup;
  productForm: FormGroup;
  employeeDetails$!: Observable<any[]>;
  editingProduct: any;
  errorMsg: any;
  constructor(private fs: FirestoreService, private router: Router) {
    this.productForm = new FormGroup({
      name: new FormControl(''),
      color: new FormControl(''),
      price: new FormControl('')
    }
    )
    this.editProductForm = new FormGroup({
      name: new FormControl(''),
      color: new FormControl(''),
      price: new FormControl(''),
    })
  }
  ngOnInit(): void {
    this.employeeDetails$ = this.fs.col$(`Product`);
  }
  async addProducts() {
    if (this.productForm.valid) {
      this.errorMsg = {
        color: 'success',
        txt: 'Adding Products'
      }
      await this.fs.add(`Product`, {
        name: this.productForm.value.name,
        color: this.productForm.value.color,
        price: this.productForm.value.price
      });
      this.errorMsg = null;
    }
  }
  editProductModal(detail: any) {
    $('#exampleInput').modal('show');
    this.editingProduct = detail;
    console.log(detail);
    this.editProductForm.patchValue({
      name: detail.name,
      color: detail.color,
      price: detail.price
    });
  }
  async saveProduct() {
    await this.fs.update(this.editingProduct.ref.path, {
      name: this.editProductForm.controls.name.value,
      color: this.editProductForm.controls.color.value,
      price: this.editProductForm.controls.price.value,
    });
    $('#exampleInput').modal('hide');
    console.log("hello");
  }
 async deleteProduct() {
  await  this.fs.delete(this.editingProduct.ref.path)
 }

  click() {
    let triggerElement = new bootstrap.Popover(<any>document.getElementById('button'));
    triggerElement.show()
  }
  // gotoJumbo(){
  //   this.router.navigate(['/Jumbo'])
  // }
}