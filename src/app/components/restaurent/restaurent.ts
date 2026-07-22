import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  imports: [CommonModule, RouterLink],
  templateUrl: './restaurant.html',
  styleUrl: './restaurant.css',
})
export class Restaurant {

  restaurants = [

    {
      id: 1,
      name: 'Barbeque Nation',
      location: 'Pune',
      cuisine: 'BBQ & Buffet',
      waiting: 12,
      image: 'images/bbq.jpg',
    },

    {
      id: 2,
      name: 'Mainland China',
      location: 'Mumbai',
      cuisine: 'Chinese',
      waiting: 8,
      image: 'images/mainland.jpg',
    },

    {
      id: 3,
      name: 'Absolute Barbecues',
      location: 'Hyderabad',
      cuisine: 'Buffet',
      waiting: 15,
      image: 'images/abs.jpg',
    },

    {
      id: 4,
      name: 'Pizza Hut',
      location: 'Delhi',
      cuisine: 'Italian',
      waiting: 6,
      image: 'images/pizzahut.jpg',
    },

    {
      id: 5,
      name: 'Domino\'s',
      location: 'Bengaluru',
      cuisine: 'Fast Food',
      waiting: 5,
      image: 'images/dominos.jpg',
    },

    {
      id: 6,
      name: 'KFC',
      location: 'Nagpur',
      cuisine: 'Fast Food',
      waiting: 9,
      image: 'images/kfc.jpg',
    },

    {
      id: 7,
      name: 'Biryani By Kilo',
      location: 'Pune',
      cuisine: 'Indian',
      waiting: 11,
      image: 'images/bbk.jpg',
    },

    {
      id: 8,
      name: 'The Urban Foundry',
      location: 'Pune',
      cuisine: 'Multi Cuisine',
      waiting: 7,
      image: 'images/foundry.jpg',
    }

  ];

}