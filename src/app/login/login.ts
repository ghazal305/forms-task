import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  user = {
    email: '',
    password: '',
  };

  submitted = false;

  onSubmit(form: any) {
    this.submitted = true;
    if (form.valid) {
      console.log('Form submitted:', this.user);
    }
  }
}
