import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
// angular 
import { NgModule } from "@angular/core";

import { DemoComponent } from './app.component';

import { FormlyModule, FormlyBootstrapModule } from "ng-formly-nativescript";


@NgModule({
    imports: [
      NativeScriptModule,
      NativeScriptFormsModule,
      FormlyModule.forRoot(),
      FormlyBootstrapModule
    ],
    declarations: [
      DemoComponent,      
    ],
    bootstrap: [
      DemoComponent
    ],
})
class DemoModule { }

platformNativeScriptDynamic().bootstrapModule(DemoModule);
