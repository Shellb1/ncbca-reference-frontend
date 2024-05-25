import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeProgramRankingsComponent } from './all-time-program-rankings.component';

describe('AllTimeProgramRankingsComponent', () => {
  let component: AllTimeProgramRankingsComponent;
  let fixture: ComponentFixture<AllTimeProgramRankingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTimeProgramRankingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTimeProgramRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
