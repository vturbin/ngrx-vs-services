import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormEventsService } from 'src/app/services/form-events.service';
import { DropdownItem } from 'src/interfaces/dropdown.interface';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.scss'],
})
export class AdressComponent implements OnInit {
  public addresForm = new FormGroup({
    street: new FormControl(),
    streetNumber: new FormControl(),
    postcode: new FormControl(),
    city: new FormControl(),
    country: new FormControl(),
  });

  public countries: DropdownItem[] = [
    { label: 'Please select', value: '' },
    { label: 'Poland', value: 'Poland' },
    { label: 'Netherlands', value: 'Netherlands' },
    { label: 'England', value: 'England' },
    { label: 'Denmark', value: 'Denmark' },
    { label: 'Italy', value: 'Italy' },
    { label: 'Germany', value: 'Germany' },
  ];

  constructor(private formEventsService: FormEventsService) {}

  public emitCountry(country: DropdownItem) {
    this.formEventsService.countryChanged.next(country);
  }

  ngOnInit() {}
}
