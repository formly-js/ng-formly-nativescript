import { Component, ViewEncapsulation } from '@angular/core';
import { FieldType } from '../../core/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'formly-field-input',
  template: `
    <TextField *ngIf="to.type != 'search'" class="input form-control" [formlyAttributes]="field" [ngClass]="{'form-control-danger': valid, right: wrapper=='sideLabel'}" [secure]="to.type == 'password'" ngDefaultControl (propertyChange)="onPropertyChanged($event)" row="0" col="1"></TextField>

    <SearchBar *ngIf="to.type == 'search'" [name]="to.key" class="input form-control" [formlyAttributes]="field" [ngClass]="{'form-control-danger': valid}"></SearchBar>
    `
})
export class FormlyFieldInput extends FieldType {

  constructor() {
    super();
    this.valueChanges = new BehaviorSubject('');
  }  

  get type() {
    return this.to.type || 'text';
  }

  public onPropertyChanged(event: any): void {
    if (event.propertyName === 'text') {
      this.valueChanges.next(event.value);
    }
  }

  ngOnInit() {
    // init with existing value
    this.valueChanges.next(this.model[this.key]);
  }
}
