import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agenda2030Component } from './agenda2030.component';

describe('Agenda2030Component', () => {
  let component: Agenda2030Component;
  let fixture: ComponentFixture<Agenda2030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agenda2030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agenda2030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
