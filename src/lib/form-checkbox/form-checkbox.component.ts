import { BaseFormElementComponent } from 'ngx-formster';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent extends BaseFormElementComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
