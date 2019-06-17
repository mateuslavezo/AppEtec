import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leiamais1Page } from './leiamais1.page';

describe('Leiamais1Page', () => {
  let component: Leiamais1Page;
  let fixture: ComponentFixture<Leiamais1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leiamais1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leiamais1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
