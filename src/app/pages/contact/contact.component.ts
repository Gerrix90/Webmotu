import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailSuccess = false;

  constructor() { }

  ngOnInit() {
  }

  OnSubmit( form: NgForm) {
    console.log('OnSubmit form', form.invalid)
      if (!form.invalid) {
        this.emailSuccess = true;
      }
  }

  alertDismissed() {
      this.emailSuccess = false;
  }
}
