import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemequemPage } from './quemequem.page';

describe('QuemequemPage', () => {
  let component: QuemequemPage;
  let fixture: ComponentFixture<QuemequemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuemequemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuemequemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
