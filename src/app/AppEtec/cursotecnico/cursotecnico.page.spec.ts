import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursotecnicoPage } from './cursotecnico.page';

describe('CursotecnicoPage', () => {
  let component: CursotecnicoPage;
  let fixture: ComponentFixture<CursotecnicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursotecnicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursotecnicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
