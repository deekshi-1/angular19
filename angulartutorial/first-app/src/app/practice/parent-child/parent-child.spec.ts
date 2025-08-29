import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChild } from './parent-child';

describe('ParentChild', () => {
  let component: ParentChild;
  let fixture: ComponentFixture<ParentChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
