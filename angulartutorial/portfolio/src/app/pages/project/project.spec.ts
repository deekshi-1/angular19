import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Project } from './project';
import { HttpClientModule } from '@angular/common/http'; // ✅ Import this

describe('Project', () => {
  let component: Project;
  let fixture: ComponentFixture<Project>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Project,
        HttpClientModule  
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Project);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
