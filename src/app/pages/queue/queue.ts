import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-queue',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './queue.html',
  styleUrl: './queue.css',
})
export class Queue {

  hospitals = [

    {
      id: 1,
      name: 'Fortis Hospital',
      location: 'Mumbai',
      waiting: 12,
      image: 'images/fortis.webp',
    },

    {
      id: 2,
      name: 'Apollo Hospital',
      location: 'Pune',
      waiting: 8,
      image: 'images/apollo.jpg',
    },

    {
      id: 3,
      name: 'Ruby Hall Clinic',
      location: 'Pune',
      waiting: 2,
      image: 'images/RUBY.jpg',
    },

    {
      id: 4,
      name: 'Kokilaben Hospital',
      location: 'Mumbai',
      waiting: 15,
      image: 'images/kokila.jpg',
    },

    {
      id: 5,
      name: 'AIIMS Delhi',
      location: 'New Delhi',
      waiting: 32,
      image: 'images/aimms.jpeg',
    }

    // 👉 Paste the remaining hospitals here
    // (id 6 to id 18)

  ];

  selectedHospital: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {

    const hospitalId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.selectedHospital = this.hospitals.find(
      hospital => hospital.id === hospitalId
    );

  }

  get estimatedTime(): number {
    return this.selectedHospital
      ? this.selectedHospital.waiting * 5
      : 0;
  }

  goBack(): void {
    this.location.back();
  }

}