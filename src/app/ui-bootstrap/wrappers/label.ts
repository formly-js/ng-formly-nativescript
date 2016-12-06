import { Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FieldWrapper } from '../../core/core';

@Component({
  selector: 'formly-wrapper-label',
  template: `
    <StackLayout class="input-field">
      <Label class="label font-weight-bold m-b-5 form-control-label" [text]="to.label"></Label>
      <template #fieldComponent></template>
      <StackLayout class="hr-light" *ngIf="to.divider"></StackLayout>
    </StackLayout>
  `
})
export class FormlyWrapperLabel extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
