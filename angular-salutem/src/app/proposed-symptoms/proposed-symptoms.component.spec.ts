import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedSymptomsComponent } from './proposed-symptoms.component';

describe('ProposedSymptomsComponent', () => {
  let component: ProposedSymptomsComponent;
  let fixture: ComponentFixture<ProposedSymptomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposedSymptomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
