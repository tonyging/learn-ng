import { Component } from '@angular/core';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  model: ContactForm = {
    name: '',
    email: '',
    message: ''
  };
  
  submitted = false;

  onSubmit() {
    console.log('Form submitted:', this.model);
    this.submitted = true;
  }
}