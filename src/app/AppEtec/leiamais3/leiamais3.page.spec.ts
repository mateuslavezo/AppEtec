import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leiamais3Page } from './leiamais3.page';

describe('Leiamais3Page', () => {
  let component: Leiamais3Page;
  let fixture: ComponentFixture<Leiamais3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leiamais3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leiamais3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
