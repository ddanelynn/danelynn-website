import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerSetComponent } from './flower-set.component';

describe('FlowerSetComponent', () => {
  let component: FlowerSetComponent;
  let fixture: ComponentFixture<FlowerSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
