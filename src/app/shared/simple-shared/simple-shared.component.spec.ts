import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSharedComponent } from './simple-shared.component';

describe('SimpleSharedComponent', () => {
  let component: SimpleSharedComponent;
  let fixture: ComponentFixture<SimpleSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
