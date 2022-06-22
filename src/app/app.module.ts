import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './shared/components/themes/theme.module';

import { LoginComponent } from './pages/customer/auth/login/login.component';
import { RegisterComponent } from './pages/customer/auth/register/register.component';
import { HomeComponent } from './pages/customer/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ThemeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
