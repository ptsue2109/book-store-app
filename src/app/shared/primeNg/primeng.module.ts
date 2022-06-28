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
import {CarouselModule} from 'primeng/carousel';
import {DropdownModule} from 'primeng/dropdown';
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
    CarouselModule,
    ScrollTopModule,
    DropdownModule
  ],
})
export class PrimengModule { }
