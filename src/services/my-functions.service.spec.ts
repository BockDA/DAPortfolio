import { TestBed } from '@angular/core/testing';

import { MyFunctionsService } from './my-functions.service';

describe('MyFunctionsService', () => {
  let service: MyFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
