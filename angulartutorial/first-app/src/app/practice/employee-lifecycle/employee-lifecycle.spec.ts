import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLifecycle } from './employee-lifecycle';

describe('EmployeeLifecycle', () => {
  let component: EmployeeLifecycle;
  let fixture: ComponentFixture<EmployeeLifecycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeLifecycle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLifecycle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
