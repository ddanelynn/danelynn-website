import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerScrollComponent } from './flower-scroll.component';

describe('FlowerScrollComponent', () => {
  let component: FlowerScrollComponent;
  let fixture: ComponentFixture<FlowerScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
