import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCartComponent } from './ng-cart.component';

describe('NgCartComponent', () => {
  let component: NgCartComponent;
  let fixture: ComponentFixture<NgCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
