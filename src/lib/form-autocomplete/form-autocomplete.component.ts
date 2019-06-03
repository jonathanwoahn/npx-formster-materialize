import { BaseFormElementComponent } from 'ngx-formster';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as M from 'materialize-css';
import { take, map } from 'rxjs/operators';


@Component({
  selector: 'lib-form-autocomplete',
  templateUrl: './form-autocomplete.component.html',
  styleUrls: ['./form-autocomplete.component.css']
})
export class FormAutocompleteComponent extends BaseFormElementComponent implements OnInit {
  @ViewChild('autocomplete') autocomplete: ElementRef;

  private auto;

  constructor() {
    super();
  }

  ngOnInit() {
    const el = this.autocomplete.nativeElement;
    const options = {
      limit: this.options.limit || 10,
      minLength: this.options.minLength || 1,
      onAutocomplete: (res) => {
        // console.log(res);
        this.formGroup.controls[this.config.key].patchValue(res);
      }
    };
    this.auto = M.Autocomplete.init(el, options);
  }

  keyup(val: string): void {
    this.options.options$
      .pipe(
        take(1),
        map((options: any[]) => {
          return options
            .filter((option: string) => {
              return option.indexOf(val.toString()) > -1;
            })
            .reduce((result, option) => {
              result[option] = null;
              return result;
            }, {});
        }),
      )
      .subscribe(results => {
        this.auto.updateData(results);
      });
  }

}
