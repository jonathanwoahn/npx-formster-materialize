import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormInputComponent } from './form-input/form-input.component';
import { NGX_FORMSTER, NgxFormsterModule } from 'ngx-formster';
import { NgxFormsterMaterializeService } from './ngx-formster-materialize.service';
import { ReactiveFormsModule, } from '@angular/forms';
import { FormSwitchComponent } from './form-switch/form-switch.component';

const COMPONENTS = [
  FormInputComponent,
  FormSwitchComponent,
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
