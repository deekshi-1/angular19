import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonExample } from './json-example';

describe('JsonExample', () => {
  let component: JsonExample;
  let fixture: ComponentFixture<JsonExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
