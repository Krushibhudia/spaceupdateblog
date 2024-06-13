import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userData = { username: '', password: '', confirmPassword: '' }; // Define userData object with properties

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      // Form is invalid, do not proceed
      return;
    }
    
    // Form is valid, proceed with submission
    console.log('Form submitted!');
    console.log('Username:', this.userData.username);
    console.log('Password:', this.userData.password);
    console.log('Confirm Password:', this.userData.confirmPassword);

    // Reset form
    form.resetForm();
  }
}
