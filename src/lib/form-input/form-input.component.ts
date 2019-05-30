import { Component, OnInit } from '@angular/core';
import { BaseFormElementComponent, NgxFormsterFormInputConfig } from 'ngx-formster';

@Component({
  selector: 'lib-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent extends BaseFormElementComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    // console.log(this.formGroup, '**********', this.config);
  }

}
