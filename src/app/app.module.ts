import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddProductComponent } from './add-product/add-product.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ProductComponent } from './product/product.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { CartService } from './services/cart.service';
import { SettingComponent } from './setting/setting.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HelpComponent } from './help/help.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddProductComponent,
    JumboComponent,
    CreateaccountComponent,
    ProductComponent,
    SettingComponent,
    AboutComponent,
    PrivacyComponent,
    HelpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
