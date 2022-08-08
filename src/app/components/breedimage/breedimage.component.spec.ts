import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedimageComponent } from './breedimage.component';

describe('BreedimageComponent', () => {
  let component: BreedimageComponent;
  let fixture: ComponentFixture<BreedimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
