import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedlistComponent } from './breedlist.component';

describe('BreedlistComponent', () => {
  let component: BreedlistComponent;
  let fixture: ComponentFixture<BreedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
