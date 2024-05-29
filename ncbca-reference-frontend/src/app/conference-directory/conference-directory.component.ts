import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conference-directory',
  standalone: true,
  imports: [],
  templateUrl: './conference-directory.component.html',
  styleUrl: './conference-directory.component.scss'
})
export class ConferenceDirectoryComponent {

  public constructor(private router: Router) {}

  navigateToConferenceSummary(conferenceName: string) {
    this.router.navigate(['/conferenceSummary'], { queryParams: { conferenceName: conferenceName, season: null} });
  }
}
