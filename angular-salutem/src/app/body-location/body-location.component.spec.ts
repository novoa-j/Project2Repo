import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLocationComponent } from './body-location.component';

describe('BodyLocationComponent', () => {
  let component: BodyLocationComponent;
  let fixture: ComponentFixture<BodyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
