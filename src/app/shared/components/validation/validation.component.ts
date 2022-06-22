import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

interface IValidator {
  key: string;
  message: string;
}

@Component({
  selector: 'app-validation',
  template: `
  <ng-container *ngFor="let validate of validators">
      <small
        class="p-error block mt-1"
        *ngIf="
          (field?.dirty || field?.touched) && field?.hasError(validate.key)
        "
      >
        {{ 
          validate.message.replace('{min}', field?.errors?.[validate.key]?.min)
                          .replace('{max}', field?.errors?.[validate.key]?.max)
                          .replace('{requiredLength}', field?.errors?.[validate.key]?.requiredLength)
        }}
      </small>
    </ng-container>
  `,
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
  @Input() field: AbstractControl | null;
  @Input() patternMessage: string;
  validators: IValidator[];


  constructor() {
    this.field = null;
    this.validators = [];
    this.patternMessage = '';
  }

  ngOnInit(): void {
    this.validators = [
      {
        key: 'required',
        message: 'Vui lòng điền thông tin',
      },
      {
        key: 'minlength',
        message: 'Vui lòng nhập tối thiểu {requiredLength} ký tự',
      },
      {
        key: 'maxlength',
        message: 'Chỉ được nhập tối đa {requiredLength} ký tự',
      },
      {
        key: 'min',
        message: 'Giá trị nhỏ nhất {min}',
      },
      {
        key: 'max',
        message: 'Giá trị lớn nhất  {max}',
      },
      {
        key: 'pattern',
        message: this.patternMessage,
      },
    ];
  }
}
