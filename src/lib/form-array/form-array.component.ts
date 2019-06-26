import { Component, OnInit } from '@angular/core';
import { FormArrayComponent as ArrayComponent } from 'ngx-formster';

@Component({
  selector: 'lib-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent extends ArrayComponent {
  constructor() {
    super();
  }
}
