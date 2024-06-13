import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  // Define properties for username and password
  username: string = '';
  password: string = '';
  constructor(private router: Router) {}

  // Define the login method to handle form submission
  login() {
    // Implement the logic to handle login
    console.log('Logging in with username:', this.username, 'and password:', this.password);
    this.router.navigate(['/main']);

    // You can add further logic here, such as sending login credentials to a server for authentication
  }
}
