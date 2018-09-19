import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedflagComponent } from './redflag.component';

describe('RedflagComponent', () => {
  let component: RedflagComponent;
  let fixture: ComponentFixture<RedflagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedflagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedflagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
