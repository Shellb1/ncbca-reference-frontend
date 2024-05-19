import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeCoachSummaryComponent } from './all-time-coach-summary.component';

describe('AllTimeCoachSummaryComponent', () => {
  let component: AllTimeCoachSummaryComponent;
  let fixture: ComponentFixture<AllTimeCoachSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTimeCoachSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTimeCoachSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
