import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroApp } from './micro-app.component';

describe('MicroApp', () => {
  let component: MicroApp;
  let fixture: ComponentFixture<MicroApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicroApp],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
