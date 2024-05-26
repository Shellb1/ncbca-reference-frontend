import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeCoachRankingsComponent } from './all-time-coach-rankings.component';

describe('AllTimeCoachRankingsComponent', () => {
  let component: AllTimeCoachRankingsComponent;
  let fixture: ComponentFixture<AllTimeCoachRankingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTimeCoachRankingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTimeCoachRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
