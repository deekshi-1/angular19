import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInterface } from './task-interface';

describe('TaskInterface', () => {
  let component: TaskInterface;
  let fixture: ComponentFixture<TaskInterface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskInterface]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskInterface);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
