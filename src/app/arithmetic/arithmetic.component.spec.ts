import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ArithmeticComponent } from './arithmetic.component';

describe('ArithmeticComponent', () => {
  let component: ArithmeticComponent;
  let fixture: ComponentFixture<ArithmeticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArithmeticComponent ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ArithmeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
