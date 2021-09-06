import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhComponent } from './hh.component';

describe('HhComponent', () => {
  let component: HhComponent;
  let fixture: ComponentFixture<HhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
