import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from '../../core/core';

@Component({
  selector: 'formly-field-multicheckbox',
  template: `
    <StackLayout *ngFor="let option of to.options" class="checkbox custom-control custom-checkbox" orientation="horizontal">
      <Switch [id]="id" [name]="id" [checked]="option.value=='on'?true:false" [formControl]="formControl.get(option.key)" [formlyAttributes]="field" class="custom-control-input"></Switch>
      <Label [text]="option.value"></Label>
    </StackLayout>
  `,
})
export class FormlyFieldMultiCheckbox extends FieldType {
  static createControl(model: any, field: FormlyFieldConfig): AbstractControl {
    let controlGroupConfig = field.templateOptions.options.reduce((previous, option) => {
      previous[option.key] = new FormControl(model ? model[option.key] : undefined);
      return previous;
    }, {});

    return new FormGroup(controlGroupConfig);
  }
}
