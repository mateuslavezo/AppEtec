import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtecPage } from './etec.page';

describe('EtecPage', () => {
  let component: EtecPage;
  let fixture: ComponentFixture<EtecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
