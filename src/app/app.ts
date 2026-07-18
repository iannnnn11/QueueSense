import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hospital } from './components/hospital/hospital';
import { Sidebar } from './components/sidebar/sidebar';

// import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [Hospital,Navbar,Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
