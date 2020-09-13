import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tm1CrosstabComponent } from './tm1-crosstab.component';

describe('Tm1CrosstabComponent', () => {
  let component: Tm1CrosstabComponent;
  let fixture: ComponentFixture<Tm1CrosstabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tm1CrosstabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tm1CrosstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
