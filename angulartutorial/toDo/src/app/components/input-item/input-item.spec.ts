import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputItem } from './input-item';

describe('InputItem', () => {
  let component: InputItem;
  let fixture: ComponentFixture<InputItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
