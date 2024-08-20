import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePrimeravistaComponent } from './detalle-primeravista.component';

describe('DetallePrimeravistaComponent', () => {
  let component: DetallePrimeravistaComponent;
  let fixture: ComponentFixture<DetallePrimeravistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePrimeravistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePrimeravistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
