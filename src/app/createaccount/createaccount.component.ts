import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router ,private fs:FirestoreService) {
    this.loginForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }
  async gotoAdd() {
    if (this.loginForm.valid) {
      await this.fs.add(`Login`, {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password, 
      });
    }
  }
 gotoProfile(){
   const firstname = this.loginForm.value.firstname;
   const lastname = this.loginForm.value.lastname;
   const email = this.loginForm.value.email;
   this.router.navigate(['/Jumbo' , firstname, lastname,email])
 }
  // gotoProduct() {
  //   this.router.navigate(['/Jumbo'])
  // }
}
