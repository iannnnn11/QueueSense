import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cinema',
  imports: [CommonModule, RouterLink],
  templateUrl: './cinema.html',
  styleUrl: './cinema.css',
})
export class Cinema {

  cinemas = [

    {
      id: 1,
      name: 'PVR Phoenix Mall',
      location: 'Pune',
      movie: 'Avengers: Endgame',
      seatsLeft: 45,
      image: 'images/pvr.jpg',
    },

    {
      id: 2,
      name: 'INOX Amanora',
      location: 'Pune',
      movie: 'Mission Impossible',
      seatsLeft: 20,
      image: 'images/inox.jpg',
    },

    {
      id: 3,
      name: 'Cinepolis Seasons Mall',
      location: 'Pune',
      movie: 'Jurassic World',
      seatsLeft: 12,
      image: 'images/cinepolis.jpg',
    },

    {
      id: 4,
      name: 'PVR Oberoi Mall',
      location: 'Mumbai',
      movie: 'Spider-Man',
      seatsLeft: 18,
      image: 'images/pvr2.jpg',
    },

    {
      id: 5,
      name: 'INOX R-City',
      location: 'Mumbai',
      movie: 'Batman',
      seatsLeft: 25,
      image: 'images/inox2.jpg',
    },

    {
      id: 6,
      name: 'Miraj Cinemas',
      location: 'Nagpur',
      movie: 'Fast X',
      seatsLeft: 15,
      image: 'images/miraj.jpg',
    },

    {
      id: 7,
      name: 'Carnival Cinemas',
      location: 'Hyderabad',
      movie: 'John Wick 4',
      seatsLeft: 30,
      image: 'images/carnival.jpg',
    },

    {
      id: 8,
      name: 'PVR Lulu Mall',
      location: 'Bengaluru',
      movie: 'Avatar 2',
      seatsLeft: 40,
      image: 'images/lulu.jpg',
    },

    {
      id: 9,
      name: 'INOX Forum Mall',
      location: 'Bengaluru',
      movie: 'Deadpool',
      seatsLeft: 22,
      image: 'images/forum.jpg',
    },

    {
      id: 10,
      name: 'Cinepolis Nexus',
      location: 'Delhi',
      movie: 'Doctor Strange',
      seatsLeft: 28,
      image: 'images/nexus.jpg',
    }

  ];

}