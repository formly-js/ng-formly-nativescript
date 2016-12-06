import { Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FieldWrapper } from '../../core/core';

@Component({
  selector: 'formly-wrapper-addons',
  template: `
    <StackLayout class="input-group">
      <StackLayout class="input-group-addon"
          *ngIf="to.addonLeft"
          (tap)="addonLeftClick($event)">
          <Label *ngIf="to.addonLeft.iconClass" [ngClass]="to.addonLeft.iconClass" [text]="to.addonLeft.icon"></Label>
          <Label *ngIf="to.addonLeft.text" [text]="to.addonLeft.text"></Label>
      </StackLayout>
      <template #fieldComponent></template>
      <StackLayout class="input-group-addon"
          *ngIf="to.addonRight"
          (tap)="addonRightClick($event)">
          <Label *ngIf="to.addonRight.iconClass" [ngClass]="to.addonRight.iconClass" [text]="to.addonLeft.icon"></Label>
          <Label *ngIf="to.addonRight.text" [text]="to.addonRight.text"></Label>
      </StackLayout>
  </StackLayout>
  `,
  encapsulation: ViewEncapsulation.None
})
export class FormlyWrapperAddons extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;

  addonRightClick($event) {
    if (this.to['addonRight'].onClick) {
      this.to['addonRight'].onClick(this.to, this, $event);
    }
  }

  addonLeftClick($event) {
    if (this.to['addonLeft'].onClick) {
      this.to['addonLeft'].onClick(this.to, this, $event);
    }
  }
}
