import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
gotoAbout(){
  this.router.navigate(['/about'])
}
gotoPrivacy(){
  this.router.navigate(['/privacy'])
}
gotoHelp(){
  this.router.navigate(['/help'])
}
gotoSign(){
  this.router.navigate(['/Jumbo'])
}
gotoProduct(){
  this.router.navigate(['/product'])
}
gotoExplore(){
  this.router.navigate(['/product'])
}
gotoJumbo(){
  this.router.navigate(['/Jumbo'])
}
}
