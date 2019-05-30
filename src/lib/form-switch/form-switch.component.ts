import { BaseFormElementComponent } from 'ngx-formster';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-form-switch',
  templateUrl: './form-switch.component.html',
  styleUrls: ['./form-switch.component.css']
})
export class FormSwitchComponent extends BaseFormElementComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
