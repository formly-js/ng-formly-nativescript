import { Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FieldWrapper } from '../../core/core';

@Component({
  selector: 'formly-wrapper-validation-messages',
  template: `
    <template #fieldComponent></template>
    <StackLayout>
      <formly-validation-message class="text-muted text-danger" [fieldForm]="formControl" [field]="field"></formly-validation-message>
    </StackLayout>
  `,
  encapsulation: ViewEncapsulation.None
})
export class FormlyWrapperValidationMessages extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;

  get validationId() {
    return this.field.id + '-message';
  }
}
