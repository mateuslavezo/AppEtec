import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemsomosPage } from './quemsomos.page';

describe('QuemsomosPage', () => {
  let component: QuemsomosPage;
  let fixture: ComponentFixture<QuemsomosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuemsomosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuemsomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
