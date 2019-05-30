import { TestBed } from '@angular/core/testing';

import { NgxFormsterMaterializeService } from './ngx-formster-materialize.service';

describe('NgxFormsterMaterializeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFormsterMaterializeService = TestBed.get(NgxFormsterMaterializeService);
    expect(service).toBeTruthy();
  });
});
