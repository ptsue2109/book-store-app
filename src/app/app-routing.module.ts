import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/customer/auth/login/login.component';
import { RegisterComponent } from './pages/customer/auth/register/register.component';
import { HomeComponent } from './pages/customer/home/home.component';
import { CustomerLayoutComponent } from './shared/components/themes/layouts/customer-layout/customer-layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path : '',
    component: CustomerLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
