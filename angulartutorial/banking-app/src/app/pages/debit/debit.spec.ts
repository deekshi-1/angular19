import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Debit } from './debit';

describe('Debit', () => {
  let component: Debit;
  let fixture: ComponentFixture<Debit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Debit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Debit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
