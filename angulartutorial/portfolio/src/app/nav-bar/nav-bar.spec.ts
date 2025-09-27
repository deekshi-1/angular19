import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBar } from './nav-bar';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('NavBar', () => {
  let component: NavBar;
  let fixture: ComponentFixture<NavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBar],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            // mock anything your component needs from ActivatedRoute
            params: of({}),
            queryParams: of({}),
            snapshot: {
              paramMap: {
                get: () => null
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NavBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
  