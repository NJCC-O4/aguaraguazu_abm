import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossfitejemploComponent } from './crossfitejemplo.component';

describe('CrossfitejemploComponent', () => {
  let component: CrossfitejemploComponent;
  let fixture: ComponentFixture<CrossfitejemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossfitejemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossfitejemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
