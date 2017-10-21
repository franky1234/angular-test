import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'at-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Angular Project';
  constructor(private route: Router) {}
  logoutUser() {
    this.route.navigate(['/login']);
  }
}
