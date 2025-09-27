import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServices } from './user-services';

describe('UserServices', () => {
  let component: UserServices;
  let fixture: ComponentFixture<UserServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
