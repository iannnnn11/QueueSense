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
    waiting: 12
  },
  {
    name: 'Apollo Hospital',
    location: 'Pune',
    waiting: 8
  },
  {
    name: 'Ruby Hall Clinic',
    location: 'Pune',
    waiting: 20
  },
  {
    name: 'Kokilaben Hospital',
    location: 'Mumbai',
    waiting: 15
  },
  {
    name: 'AIIMS Delhi',
    location: 'New Delhi',
    waiting: 32
  },
  {
    name: 'Max Super Speciality',
    location: 'Delhi',
    waiting: 18
  },
  {
    name: 'Manipal Hospital',
    location: 'Bengaluru',
    waiting: 10
  },
  {
    name: 'Narayana Health',
    location: 'Bengaluru',
    waiting: 25
  },
  {
    name: 'Medanta Hospital',
    location: 'Gurugram',
    waiting: 28
  },
  {
    name: 'Lilavati Hospital',
    location: 'Mumbai',
    waiting: 14
  },
  {
    name: 'Jaslok Hospital',
    location: 'Mumbai',
    waiting: 17
  },
  {
    name: 'HCG Cancer Centre',
    location: 'Ahmedabad',
    waiting: 9
  },
  {
    name: 'Yashoda Hospital',
    location: 'Hyderabad',
    waiting: 22
  },
  {
    name: 'Care Hospitals',
    location: 'Hyderabad',
    waiting: 13
  },
  {
    name: 'Aster CMI Hospital',
    location: 'Bengaluru',
    waiting: 16
  },
  {
    name: 'Sahyadri Hospital',
    location: 'Pune',
    waiting: 7
  },
  {
    name: 'Wockhardt Hospital',
    location: 'Nagpur',
    waiting: 21
  },
  {
    name: 'Wagle Hospital',
    location: 'Thane',
    waiting: 21
  },
];
}
