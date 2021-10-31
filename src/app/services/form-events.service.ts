import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DropdownItem } from 'src/interfaces/dropdown.interface';

@Injectable({
  providedIn: 'root',
})
export class FormEventsService {
  public nationalityChanged = new Subject<DropdownItem>();
  public ageChanged = new Subject<string>();
  public countryChanged = new Subject<DropdownItem>();

  constructor() {}
}
