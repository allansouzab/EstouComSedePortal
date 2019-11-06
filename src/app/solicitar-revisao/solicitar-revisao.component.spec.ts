import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarRevisaoComponent } from './solicitar-revisao.component';

describe('SolicitarRevisaoComponent', () => {
  let component: SolicitarRevisaoComponent;
  let fixture: ComponentFixture<SolicitarRevisaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarRevisaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarRevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
