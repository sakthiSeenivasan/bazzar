import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      email: new FormControl('',Validators.email),
      password: new FormControl('', Validators.required),
    })
   }

  ngOnInit(): void {
  }
  async gotoAdd() {
    if (this.loginForm.valid) {

      await this.fs.add(`Added`, {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        
      });
    }
  }
 gotoProduct(){
   this.router.navigate(['/product'])
 }
}
