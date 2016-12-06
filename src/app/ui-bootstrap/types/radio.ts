import { Component } from '@angular/core';
import { FieldType } from '../../core/core';

@Component({
  selector: 'formly-field-radio',
  template: `
    <StackLayout [formGroup]="form">
      <StackLayout *ngFor="let option of to.options" class="radio custom-control custom-radio" orientation="horizontal">
        <Switch [checked]="option.key=='on'?true:false" [formControl]="formControl"
        [formlyAttributes]="field" class="custom-control-input" ngDefaultControl></Switch>
        <Label [text]="option.value"></Label>
      </StackLayout>
    </StackLayout>
  `,
})
export class FormlyFieldRadio extends FieldType {}
