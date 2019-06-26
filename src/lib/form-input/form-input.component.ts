import { Component, OnInit } from '@angular/core';
import { BaseFormElementComponent, NgxFormsterFormInputConfig } from 'ngx-formster';
import * as M from 'materialize-css';

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
    M.updateTextFields();
  }

}
