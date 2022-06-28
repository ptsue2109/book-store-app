import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './primeNg/primeng.module';
import { ValidationComponent } from './components/validation/validation.component';
import { SlidersComponent } from './components/sliders/sliders.component';


@NgModule({
  declarations: [ValidationComponent, SlidersComponent],
  imports: [PrimengModule],
  exports: [PrimengModule, FormsModule, ReactiveFormsModule,ValidationComponent,SlidersComponent],
})
export class SharedModule {}
