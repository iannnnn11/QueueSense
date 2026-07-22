import { Component } from '@angular/core';
import { NgForOf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hospital',
  imports: [CommonModule,RouterLink],
  templateUrl: './hospital.html',
  styleUrl: './hospital.css',
})
export class Hospital {

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
    },

    {
      id: 6,
      name: 'Max Super Speciality',
      location: 'Delhi',
      waiting: 18,
      image: 'images/max.jpg',
    },

    {
      id: 7,
      name: 'Manipal Hospital',
      location: 'Bengaluru',
      waiting: 10,
      image: 'images/mani.jpg',
    },

    {
      id: 8,
      name: 'Narayana Health',
      location: 'Bengaluru',
      waiting: 25,
      image: 'images/nara.jpg',
    },

    {
      id: 9,
      name: 'Medanta Hospital',
      location: 'Gurugram',
      waiting: 28,
      image: 'images/med.webp',
    },

    {
      id: 10,
      name: 'Lilavati Hospital',
      location: 'Mumbai',
      waiting: 14,
      image: 'images/lilavati.jpg',
    },

    {
      id: 11,
      name: 'Jaslok Hospital',
      location: 'Mumbai',
      waiting: 17,
      image: 'images/jas.jpg',
    },

    {
      id: 12,
      name: 'HCG Cancer Centre',
      location: 'Ahmedabad',
      waiting: 9,
      image: 'images/hcg.webp',
    },

    {
      id: 13,
      name: 'Yashoda Hospital',
      location: 'Hyderabad',
      waiting: 22,
      image: 'images/yas.jpg',
    },

    {
      id: 14,
      name: 'Care Hospitals',
      location: 'Hyderabad',
      waiting: 13,
      image: 'images/care.png',
    },

    {
      id: 15,
      name: 'Aster CMI Hospital',
      location: 'Bengaluru',
      waiting: 16,
      image: 'images/aster.jpg',
    },

    {
      id: 16,
      name: 'Sahyadri Hospital',
      location: 'Pune',
      waiting: 7,
      image: 'images/sah.jpg',
    },

    {
      id: 17,
      name: 'Wockhardt Hospital',
      location: 'Nagpur',
      waiting: 21,
      image: 'images/max.jpg',
    },

    {
      id: 18,
      name: 'Wagle Hospital',
      location: 'Thane',
      waiting: 21,
      image: 'images/wag.jpeg',
    }

  ];

}
