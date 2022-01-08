import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {
siginForm:FormGroup;
  constructor(private router:Router) {
    this.siginForm=new FormGroup({
      firstName:new FormControl('',Validators.required),
      lasttName:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }
gotoJumbo(){
  this.router.navigate(['/Jumbo'])
}
}
