import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CustomerHeaderComponent } from './components/customer-header/customer-header.component';
import { CustomerFooterComponent } from './components/customer-footer/customer-footer.component';

@NgModule({
    declarations: [
     
    
    CustomerLayoutComponent,
                AdminLayoutComponent,
                CustomerHeaderComponent,
                CustomerFooterComponent
  ],
    imports: [BrowserModule, RouterModule, SharedModule],
  })
  export class ThemeModule {}