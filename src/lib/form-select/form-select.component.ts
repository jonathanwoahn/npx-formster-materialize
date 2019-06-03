import { BaseFormElementComponent } from 'ngx-formster';
import { Component, OnInit, ViewContainerRef, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'lib-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent extends BaseFormElementComponent implements OnInit, AfterViewInit {
  @ViewChild('select') select: ElementRef;

  private instance;
  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    const el = this.select.nativeElement;
    this.instance = M.FormSelect.init(el);
  }

  ngOnInit() {
  }

  get getDefault(): string {
    return `Select an option`;
  }
}
