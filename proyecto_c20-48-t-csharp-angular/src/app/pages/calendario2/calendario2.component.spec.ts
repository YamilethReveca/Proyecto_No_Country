import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendario2Component } from './calendario2.component';

describe('Calendario2Component', () => {
  let component: Calendario2Component;
  let fixture: ComponentFixture<Calendario2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calendario2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calendario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
