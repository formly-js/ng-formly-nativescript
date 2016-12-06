import { Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FieldWrapper } from '../../core/core';

@Component({
  selector: 'formly-wrapper-description',
  template: `
    <template #fieldComponent></template>
    <StackLayout>
      <Label class="label m-y-5 t-12 text-muted" [text]="to.description"></Label>
    </StackLayout>
  `
})
export class FormlyWrapperDescription extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
