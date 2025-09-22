import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amstrong } from './amstrong';

describe('Amstrong', () => {
  let component: Amstrong;
  let fixture: ComponentFixture<Amstrong>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Amstrong]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Amstrong);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true for an Armstrong number (-12)', () => {
    expect(component.isArmstrongNumber(-12)).toBeFalse();
  });

  it('should return false for a non-Armstrong number (123)', () => {
    expect(component.isArmstrongNumber(123)).toBeFalse();
  });

  it('should return true for a single-digit number (5)', () => {
    expect(component.isArmstrongNumber(5)).toBeTrue();
  });

});
