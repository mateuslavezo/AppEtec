import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leiamais5Page } from './leiamais5.page';

describe('Leiamais5Page', () => {
  let component: Leiamais5Page;
  let fixture: ComponentFixture<Leiamais5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leiamais5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leiamais5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
