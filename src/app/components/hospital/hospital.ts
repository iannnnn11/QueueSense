import { Component } from '@angular/core';
import { NgForOf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hospital',
  imports: [CommonModule],
  templateUrl: './hospital.html',
  styleUrl: './hospital.css',
})
export class Hospital {
  hospitals = [
  {
    name: 'Fortis Hospital',
    location: 'Mumbai',
    waiting: 12,
    image: 'images/fortis.webp',
  },
  {
    name: 'Apollo Hospital',
    location: 'Pune',
    waiting: 8,
    image: 'images/apollo.jpg',
  },
  {
    name: 'Ruby Hall Clinic',
    location: 'Pune',
    waiting: 2,
    image: 'images/RUBY.jpg',

  },
  {
    name: 'Kokilaben Hospital',
    location: 'Mumbai',
    waiting: 15,
    image: 'images/kokila.jpg',
  },
  {
    name: 'AIIMS Delhi',
    location: 'New Delhi',
    waiting: 32,
    image: 'images/aimms.jpeg',
  },
  {
    name: 'Max Super Speciality',
    location: 'Delhi',
    waiting: 18,
    image: 'images/max.jpg',
  },
  {
    name: 'Manipal Hospital',
    location: 'Bengaluru',
    waiting: 10,
    image: 'images/mani.jpg',
  },
  {
    name: 'Narayana Health',
    location: 'Bengaluru',
    waiting: 25,
    image: 'images/nara.jpg',
  },
  {
    name: 'Medanta Hospital',
    location: 'Gurugram',
    waiting: 28,
    image: 'images/med.webp',
  },
  {
    name: 'Lilavati Hospital',
    location: 'Mumbai',
    waiting: 14,
    image: 'images/lilavati.jpg',
  },
  {
    name: 'Jaslok Hospital',
    location: 'Mumbai',
    waiting: 17,
    image: 'images/jas.jpg',
  },
  {
    name: 'HCG Cancer Centre',
    location: 'Ahmedabad',
    waiting: 9,
    image: 'images/hcg.webp',
  },
  {
    name: 'Yashoda Hospital',
    location: 'Hyderabad',
    waiting: 22,
    image: 'images/yas.jpg',
  },
  {
    name: 'Care Hospitals',
    location: 'Hyderabad',
    waiting: 13,
    image: 'images/care.png',
  },
  {
    name: 'Aster CMI Hospital',
    location: 'Bengaluru',
    waiting: 16,
    image: 'images/aster.jpg',
  },
  {
    name: 'Sahyadri Hospital',
    location: 'Pune',
    waiting: 7,
    image: 'images/sah.jpg',
  },
  {
    name: 'Wockhardt Hospital',
    location: 'Nagpur',
    waiting: 21,
    image: 'images/max.jpg',
  },
  {
    name: 'Wagle Hospital',
    location: 'Thane',
    waiting: 21,
    image: 'images/wag.jpeg',
  },
];
}
