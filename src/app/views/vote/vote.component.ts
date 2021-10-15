import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DropdownItem } from 'src/interfaces/dropdown.interface';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {
  public parties: DropdownItem[] = [
    { label: 'SPD', value: 'SPD' },
    { label: 'CDU', value: 'CDU' },
    { label: 'CSU', value: 'CSU' },
    { label: 'GRÜNE', value: 'GRUENE' },
    { label: 'FDP', value: 'FDP' },
    { label: 'AfD', value: 'AfD' },
    { label: 'LINKE', value: 'LINKE' },
  ];

  public voteForm = new FormGroup({
    party: new FormControl(),
  });

  constructor() {}

  ngOnInit() {}
}
