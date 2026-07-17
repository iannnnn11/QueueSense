import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-queue-card',
  imports: [],
  templateUrl: './queue-card.html',
  styleUrl: './queue-card.css',
})
export class QueueCard {
  @Input()
  name: string = '';
  @Input()
  waiting: number = 0;

}
