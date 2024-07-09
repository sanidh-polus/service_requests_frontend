import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  errorMessage = '';
  firstName = '';
  lastName = '';
  designation = '';
  email = '';
  phoneNumber = '';
  country = '';
  state = '';
  address = '';
  password = '';
  confirmPassword = '';
  passwordType = 'password';
  togglePasswordClass = 'bi-eye-slash';
  confirmPasswordType = 'password';
  toggleConfirmPasswordClass = 'bi-eye-slash';

  isValidEmailFormat(email: string): boolean {
    // Regular expression for basic email validation
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return emailRegex.test(email);
  }

  countDigitsWithSpaces(inputString: string) {
    const digitsOnly = inputString.replace(/\D/g, '');
    const digitCount = digitsOnly.length;
    return digitCount === 10;
  }

  signup() {
    if (
      this.email == '' ||
      this.password == '' ||
      this.firstName == '' ||
      this.lastName == '' ||
      this.designation == '' ||
      this.phoneNumber == '' ||
      this.country == '' ||
      this.state == '' ||
      this.address == '' ||
      this.confirmPassword == ''
    ) {
      // alert('Please enter all details');
      this.errorMessage = 'Please enter all details';
      return;
    }

    if (this.isValidEmailFormat(this.email) == false) {
      // alert('Enter a valid email');
      this.errorMessage = 'Enter a valid email';
      return;
    }

    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (this.password.length < 8) {
      // alert('Password should contain at least 8 characters');
      this.errorMessage = 'Password should contain at least 8 characters';
      return;
    }

    if (this.password != this.confirmPassword) {
      // alert('Password do not match');
      this.errorMessage = 'Passwords do not match';
      return;
    }

    // Example: Just log the values to console
    console.log('Username: ' + this.email);
    console.log('Password: ' + this.password);
    console.log('Confirm Password: ' + this.confirmPassword);

    // You can perform further validation or processing here

    // Example: Redirect to another page after successful login
    // window.location.href = 'dashboard.html';
  }

  // Function to toggle password visibility
  togglePasswordVisibility(): void {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
     this.togglePasswordClass = 'bi-eye';
    } else {
      this.passwordType = 'password';
     this.togglePasswordClass = 'bi-eye-slash';
    }
  }

  // Function to toggle password visibility
  toggleConfirmPasswordVisibility(): void {
    if (this.confirmPasswordType === 'password') {
      this.confirmPasswordType = 'text';
     this.toggleConfirmPasswordClass = 'bi-eye';
    } else {
      this.confirmPasswordType = 'password';
     this.toggleConfirmPasswordClass = 'bi-eye-slash';
    }
  }
}
