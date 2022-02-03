import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-jumbo',
  templateUrl: './jumbo.component.html',
  styleUrls: ['./jumbo.component.scss']
})
export class JumboComponent implements OnInit {
loginForm:FormGroup;
  constructor(private router:Router, private fb:AngularFirestore, private fs:FirestoreService) {
    this.loginForm = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('', Validators.required),
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
 gotoProduct(){
  const email = this.loginForm.value.email;
   this.router.navigate(['/product' ,email ])
 }
 gotoCreate(){
   this.router.navigate(['/createaccount'])
 }
}
