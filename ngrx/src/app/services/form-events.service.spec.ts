/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormEventsService } from './form-events.service';

describe('Service: FormEvents', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormEventsService]
    });
  });

  it('should ...', inject([FormEventsService], (service: FormEventsService) => {
    expect(service).toBeTruthy();
  }));
});
