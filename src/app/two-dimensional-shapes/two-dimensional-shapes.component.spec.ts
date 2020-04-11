import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwoDimensionalShapesComponent } from './two-dimensional-shapes.component';

describe('TwoDimensionalShapesComponent', () => {
  let component: TwoDimensionalShapesComponent;
  let fixture: ComponentFixture<TwoDimensionalShapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoDimensionalShapesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwoDimensionalShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
