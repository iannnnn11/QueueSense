import { Component } from '@angular/core';
import { QueueCard } from '../queue-card/queue-card';

@Component({
  selector: 'app-dashboard',
  imports: [QueueCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}