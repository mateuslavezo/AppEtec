import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leiamais4Page } from './leiamais4.page';

describe('Leiamais4Page', () => {
  let component: Leiamais4Page;
  let fixture: ComponentFixture<Leiamais4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leiamais4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leiamais4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
