import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    if (!this.contactData.name || !this.contactData.email || !this.contactData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    console.log('Form submitted!', this.contactData);
    alert('Thank you for reaching out! We will get back to you soon.');

    // Reset the form
    this.contactData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}
