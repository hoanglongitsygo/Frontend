import { RegisterModule } from './component/register/register.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { MessageComponent } from './shared/component/message/message.component';
import { ToastMessageComponent } from './shared/component/toast-message/toast-message.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeModule } from './component/home/home.module';
import { CarouselModule } from 'primeng/carousel';
import { BadgeModule } from 'primeng/badge';
import { CartComponent } from './component/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { LoadingComponent } from './shared/component/loading/loading.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AdminComponent } from './component/admin/admin.component';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { MatIconModule } from "@angular/material/icon";
import { AdminModule } from './component/admin/admin.module';
import { TabMenuModule } from 'primeng/tabmenu';
import { AvatarModule } from 'primeng/avatar';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductDetailsComponent } from './component/product-details/product-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MessageComponent,
    ToastMessageComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    CartComponent,
    LoadingComponent,
    AdminComponent,
    FavoriteComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    HomeModule,
    RegisterModule,
    CarouselModule,
    BadgeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
    ProgressSpinnerModule,
    MatIconModule,
    AdminModule,
    TabMenuModule,
    AvatarModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
