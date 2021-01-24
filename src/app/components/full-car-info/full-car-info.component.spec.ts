import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCarInfoComponent } from './full-car-info.component';

describe('FullCarInfoComponent', () => {
  let component: FullCarInfoComponent;
  let fixture: ComponentFixture<FullCarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullCarInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
