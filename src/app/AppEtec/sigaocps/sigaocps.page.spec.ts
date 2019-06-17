import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigaocpsPage } from './sigaocps.page';

describe('SigaocpsPage', () => {
  let component: SigaocpsPage;
  let fixture: ComponentFixture<SigaocpsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigaocpsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigaocpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
