import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { CustomFormControlComponent } from './profile-editor/custom-form-control/custom-form-control.component';
import { CustomFormControlWrapperComponent } from './profile-editor/custom-form-control-wrapper/custom-form-control-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    CustomFormControlComponent,
    CustomFormControlWrapperComponent,
  ],
  imports: [
    BrowserModule,
    // other imports ...
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/