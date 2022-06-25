import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TractComponent } from './tract.component';

describe('TractComponent', () => {
  let component: TractComponent;
  let fixture: ComponentFixture<TractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
