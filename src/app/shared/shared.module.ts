import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './primeNg/primeng.module';
import { ValidationComponent } from './components/validation/validation.component';
@NgModule({
    declarations: [ValidationComponent],
    imports: [PrimengModule],
    exports: [PrimengModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule { }
