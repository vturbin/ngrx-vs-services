import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DropdownItem } from 'src/interfaces/dropdown.interface';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  public titles: DropdownItem[] = [
    { label: 'Mr.', value: 'Mr.' },
    { label: 'Mrs.', value: 'Mrs.' },
    { label: 'Ms.', value: 'Ms.' },
  ];

  public nations: DropdownItem[] = [
    { label: 'Please select', value: '' },
    { label: 'Polish', value: 'Polish' },
    { label: 'Dutch', value: 'Dutch' },
    { label: 'English', value: 'English' },
    { label: 'Danish', value: 'Danish' },
    { label: 'Italian', value: 'Italian' },
    { label: 'German', value: 'German' },
  ];

  public personalInfo = new FormGroup({
    title: new FormControl(),
    name: new FormControl(),
    surname: new FormControl(),
    age: new FormControl(),
    jobTitle: new FormControl(),
    nation: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit() {}
}
