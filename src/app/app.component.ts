import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { FormlyFieldConfig } from "ng-formly-nativescript";
import * as dialogs from 'ui/dialogs';

@Component({
  selector: 'app',
  template: `
  <ActionBar title="ng-formly-nativescript"> 
  </ActionBar>
  <ScrollView class="page">
    <StackLayout> 
      <StackLayout class="p-20">
        <formly-form [model]="user" [fields]="userFields"></formly-form>
      </StackLayout>

      <StackLayout class="m-x-10">
        <Button class="btn btn-primary btn-active" text="Save" (tap)="save()"></Button>   
      </StackLayout>

      <StackLayout *ngIf="savedUser" class="p-20">
        <Label text="Saved Data:" class="footnote"></Label>
        <TextView [text]="savedUser" editable="false" class="input t-18" width="100%" height="200"></TextView>
      </StackLayout>
    </StackLayout>
  </ScrollView>
  `,
  encapsulation: ViewEncapsulation.None
})
export class DemoComponent {
  public form: FormGroup = new FormGroup({});
  public userFields: FormlyFieldConfig = [{
    fieldGroup: [
      {
        key: 'first',
        type: 'input',
        wrappers: ['sideLabel'],
        templateOptions: {
          type: 'text',
          label: 'First',
          placeholder: 'Enter firstname',
          divider: true
        }
      },
      {
        key: 'last',
        type: 'input',
        wrappers: ['sideLabel'],
        templateOptions: {
          type: 'text',
          label: 'Last',
          placeholder: 'Enter lastname',
          divider: true
        }
      },
      {
        key: 'email',
        type: 'input',
        wrappers: ['sideLabel'],
        templateOptions: {
          type: 'email',
          label: 'Email',
          placeholder: 'Enter email',
          divider: true
        },
        modelOptions: {
          debounce: {
            default: 1000
          }
        }
      },
      {
        key: 'password',
        type: 'input',
        wrappers: ['sideLabel'],
        templateOptions: {
          type: 'password',
          label: 'Password',
          placeholder: 'Password',
          divider: true
        }
      },
      {
        key: 'checked',
        type: 'checkbox',
        templateOptions: {
          type: 'checkbox',
          label: 'I agree to the terms'
        }
      }
    ]
  }];

  public user = {
    email: 'email@gmail.com',
    checked: false
  };

  public savedUser: any;

  public save() {
    dialogs.alert(`Formly data saved! :)`);
    this.savedUser = JSON.stringify(this.user);
  } 

}
