import { AboutComponent } from './about.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('About Component', () => {
  let fixture: ComponentFixture<AboutComponent>;
  let component: AboutComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent]
    }).compileComponents();
  })

  beforeEach(async () => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
})

