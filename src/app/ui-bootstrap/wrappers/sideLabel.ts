import { Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FieldWrapper } from '../../core/core';

@Component({
  selector: 'formly-wrapper-side-label',
  template: `
    <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
      <Label class="label font-weight-bold" row="0" col="0" [text]="to.label"></Label>
      <template #fieldComponent></template>
      <StackLayout class="hr-light" row="1" colSpan="2" *ngIf="to.divider"></StackLayout>
    </GridLayout>
  `
})
export class FormlyWrapperSideLabel extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
