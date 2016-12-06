import { Component } from '@angular/core';
import { FieldType } from '../../core/core';

@Component({
  selector: 'formly-field-textarea',
  template: `
    <TextView [id]="id" [formControl]="formControl" class="input form-control"
      [formlyAttributes]="field" ngDefaultControl>
    </TextView>
  `,
})
export class FormlyFieldTextArea extends FieldType {
}
