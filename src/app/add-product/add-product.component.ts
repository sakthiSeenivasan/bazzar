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
  productForm: FormGroup;
  productionForm: FormGroup;
  employeeDetails$: Observable<any[]> | undefined;
  constructor(private fs: FirestoreService, private router:Router) {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    }
    )
    this.productionForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      adress: new FormControl('', Validators.required),
    })
  }

  ngOnInit() : void {
    this.employeeDetails$ = this.fs.col$(`Product/CDCbT7sQbdJZhCFXk59S/124563`);
  }
  async addProducts() {
    if (this.productForm.valid) {

      await this.fs.add(`Product`, {
        name: this.productForm.value.name,
        color: this.productForm.value.color,
        price: this.productForm.value.price

      });
    }
  }
    send(){
        this.fs.col("product").doc("uRtGX8Wk5Pa5LyfXXqZ5").update({
          name: this.productForm.value.name,
          email: this.productForm.value.age,
          address: this.productForm.value.address,
        });
    }
   
    // addUser(){
    //     $('#exampleInput').modal('show');
    //   }
    // exampleInput.show()
  
  click() {
    let triggerElement =new bootstrap.Popover(<any>document.getElementById('button')) ;
    triggerElement.show()
  
  }
  gotoJumbo(){
    this.router.navigate(['/Jumbo'])
  }
}