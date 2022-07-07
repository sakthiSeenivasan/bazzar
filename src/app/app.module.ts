import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MainComponent } from './main/main.component';
import { AddProductComponent } from './add-product/add-product.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ProductComponent } from './product/product.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { SettingComponent } from './setting/setting.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HelpComponent } from './help/help.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ElectroncisComponent } from './electroncis/electroncis.component';
import * as phoneLib from 'google-libphonenumber';

@NgModule({
  declarations: [
    AppComponent,
    // MainComponent,
    AddProductComponent,
    JumboComponent,
    CreateaccountComponent,
    ProductComponent,
    SettingComponent,
    AboutComponent,
    PrivacyComponent,
    HelpComponent,
    CartComponent,
    OrderComponent,
    WishlistComponent,
    ElectroncisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
