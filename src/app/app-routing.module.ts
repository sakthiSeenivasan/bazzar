import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { HelpComponent } from './help/help.component';
import { JumboComponent } from './jumbo/jumbo.component';

import { MainComponent } from './main/main.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProductComponent } from './product/product.component';
import { SettingComponent } from './setting/setting.component';


const routes: Routes = [
  // {path:'',component:LoginComponent},
  {path:'', component:AddProductComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'main',component:MainComponent},
  {path:'Jumbo',component:JumboComponent},
  {path:'',component:JumboComponent},
  {path:'',component:ProductComponent},
  {path:'product/:email',component:ProductComponent},
  {path:'createaccount',component:CreateaccountComponent},
  {path:'product',component:ProductComponent},
  {path:'setting',component:SettingComponent},
  {path:'about',component:AboutComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'help',component:HelpComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
