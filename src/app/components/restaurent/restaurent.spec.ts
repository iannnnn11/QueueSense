import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restaurent } from './restaurent';

describe('Restaurent', () => {
  let component: Restaurent;
  let fixture: ComponentFixture<Restaurent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Restaurent],
    }).compileComponents();

    fixture = TestBed.createComponent(Restaurent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
