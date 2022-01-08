import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';
import { FirestoreService } from '../services/firestore.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  loginForm:FormGroup;
  
  constructor(private router:Router, private cart:CartService, private fs:FirestoreService) { 
    this.loginForm = new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email: new FormControl('',Validators.email),
      phoneno: new FormControl('',Validators.email),
      address: new FormControl('',Validators.email),
      city: new FormControl('',Validators.email),
      state: new FormControl('',Validators.email),
    
    })
  }

  ngOnInit(): void {
   

  }
  gotoJumbo(){
    this.router.navigate(['/Jumbo'])
  }   

addUser() {
  $('#addModal').modal('show');
}
gotoSetting(){
  this.router.navigate(['/setting'])
}
}