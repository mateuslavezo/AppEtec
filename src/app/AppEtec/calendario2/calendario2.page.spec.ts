import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calendario2Page } from './calendario2.page';

describe('Calendario2Page', () => {
  let component: Calendario2Page;
  let fixture: ComponentFixture<Calendario2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calendario2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calendario2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
