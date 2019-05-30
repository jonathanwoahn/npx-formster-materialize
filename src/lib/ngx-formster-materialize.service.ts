import { FormSwitchComponent } from './form-switch/form-switch.component';
import { FormInputComponent } from './form-input/form-input.component';
import { Injectable } from '@angular/core';
import { NgxFormsterTypes, ComponentLibrary, NgxFormsterComponentProvider } from 'ngx-formster';

@Injectable({
  providedIn: 'root'
})
export class NgxFormsterMaterializeService extends NgxFormsterComponentProvider {
  constructor() {
    super();
    this.library = [
      {
        type: 'input',
        component: FormInputComponent,
      },
      {
        type: 'switch',
        component: FormSwitchComponent,
      },
    ];
  }
}
