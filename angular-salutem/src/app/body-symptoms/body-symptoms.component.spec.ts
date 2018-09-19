import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySymptomsComponent } from './body-symptoms.component';

describe('BodySymptomsComponent', () => {
  let component: BodySymptomsComponent;
  let fixture: ComponentFixture<BodySymptomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySymptomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
