import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueCard } from './queue-card';

describe('QueueCard', () => {
  let component: QueueCard;
  let fixture: ComponentFixture<QueueCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueueCard],
    }).compileComponents();

    fixture = TestBed.createComponent(QueueCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
