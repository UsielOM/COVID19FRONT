import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Pages/home/home.module';
import { UserModule } from './Pages/user/user.module';
import { FooterComponent } from './Shared/footer/footer.component';
import { ErrorComponent } from './Shared/error/error.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    UserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
