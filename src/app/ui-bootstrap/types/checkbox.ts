import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from '../../core/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'formly-field-checkbox',
  template: `
    <StackLayout class="custom-control custom-checkbox" orientation="horizontal">
      <Switch *ngIf="!to.hidden" [isEnabled]="!to.disabled"
        [formlyAttributes]="field" class="switch custom-control-input"
        ngDefaultControl (propertyChange)="onPropertyChanged($event)"></Switch>
      <Label [text]="to.label" class="label footnote" verticalAlignment="center"></Label>
    </StackLayout>
  `
})
export class FormlyFieldCheckbox extends FieldType {

  constructor() {
    super();
    this.valueChanges = new BehaviorSubject(false);
  } 
  
  static createControl(model: any, field: FormlyFieldConfig): AbstractControl {
    return new FormControl(
      { checked: model ? 'true' : 'false', disabled: field.templateOptions.disabled },
      field.validators ? field.validators.validation : undefined,
      field.asyncValidators ? field.asyncValidators.validation : undefined,
    );
  }

  public onPropertyChanged(event: any): void {
    if (event.propertyName === 'checked') {
      this.valueChanges.next(event.value);
    }
  }
}
