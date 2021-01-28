import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPostInfoComponent } from './full-post-info.component';

describe('FullPostInfoComponent', () => {
  let component: FullPostInfoComponent;
  let fixture: ComponentFixture<FullPostInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullPostInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPostInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
