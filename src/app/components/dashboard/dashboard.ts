import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hospital',
  standalone: true,

  imports: [
    CommonModule,
    RouterLink
  ],

  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  stats = [
    {
      icon: 'fa-solid fa-hospital',
      title: 'Hospitals',
      value: 24,
      color: 'primary'
    },
    {
      icon: 'fa-solid fa-ticket',
      title: 'My Tokens',
      value: 3,
      color: 'success'
    },
    {
      icon: 'fa-solid fa-clock',
      title: 'Avg Wait',
      value: '18 min',
      color: 'warning'
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Nearby',
      value: 12,
      color: 'danger'
    }
  ];

  categories = [
    {
      name: 'Hospitals',
      icon: 'fa-solid fa-hospital'
    },
    {
      name: 'Banks',
      icon: 'fa-solid fa-building-columns'
    },
    {
      name: 'Restaurants',
      icon: 'fa-solid fa-utensils'
    },
    {
      name: 'Cinema',
      icon: 'fa-solid fa-film'
    },
    {
      name: 'Colleges',
      icon: 'fa-solid fa-graduation-cap'
    },
    {
      name: 'Government',
      icon: 'fa-solid fa-landmark'
    }
  ];

  queues = [
    {
      name: 'Ruby Hall Clinic',
      location: 'Pune',
      waiting: 18,
      crowd: 70,
      status: 'Open'
    },
    {
      name: 'Apollo Hospital',
      location: 'Mumbai',
      waiting: 25,
      crowd: 85,
      status: 'Open'
    },
    {
      name: 'Fortis Hospital',
      location: 'Delhi',
      waiting: 12,
      crowd: 50,
      status: 'Open'
    }
  ];

}