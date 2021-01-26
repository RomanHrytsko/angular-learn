import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPostComponentComponent } from './full-post-component.component';

describe('FullPostComponentComponent', () => {
  let component: FullPostComponentComponent;
  let fixture: ComponentFixture<FullPostComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullPostComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
