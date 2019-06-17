import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursooferecidoPage } from './cursooferecido.page';

describe('CursooferecidoPage', () => {
  let component: CursooferecidoPage;
  let fixture: ComponentFixture<CursooferecidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursooferecidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursooferecidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
