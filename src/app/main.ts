import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
// angular 
import { NgModule } from "@angular/core";

import { DemoComponent } from './app.component';

import { NativeScriptAngularFormly } from "nativescript-angular-formly";


@NgModule({
    imports: [
      NativeScriptModule,
      NativeScriptAngularFormly
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
