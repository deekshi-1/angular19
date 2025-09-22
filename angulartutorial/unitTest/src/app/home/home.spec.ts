import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return true for 2', () => {
    expect(component.isPrime(2)).toBeTrue()
  })

  it('should return false for 6', () => {
    expect(component.isPrime(6)).toBeFalse()
  })
  it('should throw error for 1', () => {
    expect(() => component.isPrime(1)).toThrowError('Must be greater than 1')
  })
  it('should throw error for 5.55', () => {
    expect(() => component.isPrime(5.55)).toThrowError('Number must be an integer.');
  })
  it('should throw error for abcc', () => {
    expect(() => component.isPrime('abc')).toThrowError('Input type should be number')
  })
});
