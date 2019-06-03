import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormInputComponent } from './form-input/form-input.component';
import { NGX_FORMSTER, NgxFormsterModule } from 'ngx-formster';
import { NgxFormsterMaterializeService } from './ngx-formster-materialize.service';
import { ReactiveFormsModule, } from '@angular/forms';
import { FormSwitchComponent } from './form-switch/form-switch.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormAutocompleteComponent } from './form-autocomplete/form-autocomplete.component';

const COMPONENTS = [
  FormInputComponent,
  FormSwitchComponent,
  FormCheckboxComponent,
  FormTextareaComponent,
  FormSelectComponent,
  FormAutocompleteComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  entryComponents: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxFormsterModule,
  ],
  providers: [
    {
      provide: NGX_FORMSTER,
      useClass: NgxFormsterMaterializeService,
      multi: true,
    },
  ],
})
export class NgxFormsterMaterializeModule { }
