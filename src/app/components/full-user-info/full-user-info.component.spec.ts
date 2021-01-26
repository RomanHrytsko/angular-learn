import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullUserInfoComponent } from './full-user-info.component';

describe('FullUserInfoComponent', () => {
  let component: FullUserInfoComponent;
  let fixture: ComponentFixture<FullUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullUserInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
