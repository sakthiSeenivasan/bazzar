import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { FirestoreService } from '../services/firestore.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  loginForm: FormGroup;
  employeeDetails$!: Observable<any[]>;
  editingProduct: any;
  params: any;
  userEmail: any;
  constructor(private router: Router, private fs: FirestoreService, private route: ActivatedRoute) {
    this.loginForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      phoneno: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),

    })
  }

  ngOnInit() {
    this.employeeDetails$ = this.fs.col$(`Login`);
    this.route.params.subscribe(params => {
      this.userEmail = params['email'];
      this.userEmail = params['firstname'];
      this.userEmail = params['lastname'];


      this.loginForm.patchValue({
        email: this.userEmail,
        firstname:this.userEmail,
        lastname:this.userEmail
      });
    })
    
  }

  // async saveProduct() {
  //   await this.fs.update(this.editingProduct.ref.path, {
  //     email: this.loginForm.controls.email.value,


  //   });

  // }

  gotoJumbo() {
    this.router.navigate(['/Jumbo'])
  }

  addUser() {
    $('#addModal').modal('show');
  }
  gotoSetting() {
    this.router.navigate(['/setting'])
  }
}