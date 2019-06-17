import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VejamaisnoticiasPage } from './vejamaisnoticias.page';

describe('VejamaisnoticiasPage', () => {
  let component: VejamaisnoticiasPage;
  let fixture: ComponentFixture<VejamaisnoticiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VejamaisnoticiasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VejamaisnoticiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
