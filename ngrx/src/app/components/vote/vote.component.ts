import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormEventsService } from 'src/app/services/form-events.service';
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

  private subscriptions: Subscription[] = [];

  public voteForm = new FormGroup({
    party: new FormControl(),
  });

  /** Required fields for verification if vote field should be enabled */
  private age: number;
  private nationality: string;
  private country: string;

  constructor(private formEventsService: FormEventsService) {
    this.subscriptions.push(
      this.formEventsService.nationalityChanged.subscribe((nationality) => {
        this.nationality = nationality?.value;
        this.checkForVoteEligibility();
      }),
      this.formEventsService.ageChanged.subscribe((age) => {
        this.age = age;
        this.checkForVoteEligibility();
      }),
      this.formEventsService.countryChanged.subscribe((country) => {
        this.country = country?.value;
        this.checkForVoteEligibility();
      })
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private checkForVoteEligibility() {
    if (
      this.age >= 18 &&
      this.nationality === 'German' &&
      this.country === 'Germany'
    ) {
      this.voteForm.enable();
    } else {
      this.voteForm.disable();
    }
  }
}
