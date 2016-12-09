import { platformNativeScriptDynamic, NativeScriptModule, NativeScriptFormsModule } from "nativescript-angular";
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
