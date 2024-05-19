import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeTeamSummaryComponent } from './all-time-team-summary.component';

describe('AllTimeTeamSummaryComponent', () => {
  let component: AllTimeTeamSummaryComponent;
  let fixture: ComponentFixture<AllTimeTeamSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTimeTeamSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTimeTeamSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
