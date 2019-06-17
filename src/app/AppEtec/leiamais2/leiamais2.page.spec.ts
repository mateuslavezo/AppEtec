import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leiamais2Page } from './leiamais2.page';

describe('Leiamais2Page', () => {
  let component: Leiamais2Page;
  let fixture: ComponentFixture<Leiamais2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leiamais2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leiamais2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
