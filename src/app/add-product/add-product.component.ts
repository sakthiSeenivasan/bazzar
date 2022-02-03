import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore.service';
import * as bootstrap from 'bootstrap';
import { Router } from '@angular/router';
import { finalize, map, tap } from 'rxjs/operators';
import { data } from 'jquery';
import { BasePage } from '../core/base.page';
declare let $: any;
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent extends BasePage implements OnInit {
  editProductForm: FormGroup;
  productForm: FormGroup;
  employeeDetails$!: Observable<any[]>;
  editingProduct: any;
  errorMsg: any;
  savingProduct = false;
  data: any;
  deletingProduct: any;
  defaultImage = "../../assets/img/men.jpg";
  imageUrl: any;
  currentProduct: any;
  enableImage = false;
  constructor(private fs: FirestoreService, private router: Router, private storage: AngularFireStorage) {
    super();
    this.productForm = new FormGroup({
      name: new FormControl(''),
      color: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      imageUrl: new FormControl('')
    }
    )
    this.editProductForm = new FormGroup({
      name: new FormControl(''),
      color: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),

    });
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
        price: this.productForm.value.price,
        description: this.productForm.value.description,
        imageUrl: this.productForm.value.imageUrl
      });
      this.errorMsg = null;
    }
  }
  editProductModal(detail: any) {
    $('#exampleInput').modal('show');
    this.editingProduct = detail;
    // if (this.editingProduct.imageUrl) {
    //   this.enableImage = true;
    // }
    console.log(detail);
    this.editProductForm.patchValue({
      name: detail.name,
      color: detail.color,
      price: detail.price,// $('#deleteProduct').modal('show');
      description: detail.description
    });
  }
  async saveProduct() {
    this.savingProduct = true;
    await this.fs.update(this.editingProduct.ref.path, {
      name: this.editProductForm.controls.name.value,
      color: this.editProductForm.controls.color.value,
      price: this.editProductForm.controls.price.value,
      description: this.editProductForm.controls.description.value,
    });
    this.currentProduct = this.editingProduct.imageUrl;
    this.savingProduct = false;
    $('#exampleInput').modal('hide');
    this.router.navigate(['/product']);
  }
  deleteProduct(detail: any) {
    // $('#deleteProduct').modal('show');
    this.deletingProduct = detail;
    this.data = new bootstrap.Modal(<any>document.getElementById('deleteProduct'));
    this.data.show();
  }
  async delete() {
    await this.fs.delete(this.deletingProduct.ref.path);
    this.data.hide();
  }
  uploadImage(event: any) {
    // console.log(event.target.value)
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        const path = `products/${this.editingProduct._id}/images/${new Date().getTime()}`;
        const task = this.storage.upload(path, event.target.files[0]);
        task.snapshotChanges().subscribe(
          async () => {
            const data = await this.storage.ref(path).getDownloadURL().toPromise();
            console.log(data);
            if (data) {
              await this.fs.update(`Product/${this.editingProduct._id}`, {
                imageUrl: data
              });
              this.editingProduct.imageUrl = data;
            } else {
              console.log(data);
            }
          })

      }
    }
  }

}