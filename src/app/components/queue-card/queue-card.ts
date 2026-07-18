import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-queue-card',
  imports: [],
  templateUrl: './queue-card.html',
  styleUrl: './queue-card.css'
})
export class QueueCard {

  @Input()
  name = '';

  @Input()
  waiting = 0;

  @Output()
  joinClicked = new EventEmitter<void>();

  joinQueue() {
    this.joinClicked.emit();
  }
}