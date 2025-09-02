import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavListhome } from './fav-listhome';

describe('FavListhome', () => {
  let component: FavListhome;
  let fixture: ComponentFixture<FavListhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavListhome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavListhome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
