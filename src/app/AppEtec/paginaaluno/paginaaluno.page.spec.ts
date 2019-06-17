import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaalunoPage } from './paginaaluno.page';

describe('PaginaalunoPage', () => {
  let component: PaginaalunoPage;
  let fixture: ComponentFixture<PaginaalunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaalunoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaalunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
