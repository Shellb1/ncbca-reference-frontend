import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceSummaryComponent } from './conference-summary.component';

describe('ConferenceSummaryComponent', () => {
  let component: ConferenceSummaryComponent;
  let fixture: ComponentFixture<ConferenceSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenceSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConferenceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
