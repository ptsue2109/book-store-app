import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ScrollTopModule } from 'primeng/scrolltop';
@NgModule({
  providers: [MessageService],
  exports: [
    CheckboxModule,
    ButtonModule,
    ToastModule,
    MessageModule,
    InputTextModule,
    DividerModule,
    AvatarModule,
    BadgeModule,
    ScrollTopModule
  ],
})
export class PrimengModule { }
