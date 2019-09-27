import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clock } from './clock.component';

describe('Clock', () => {
  let component: Clock;
  let fixture: ComponentFixture<Clock>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clock ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
