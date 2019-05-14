import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent {
  ticket = {
      origin: '',
      originName: '',
      destination: '',
      destinationName: '',
      departureDate: '',
      departureTime: '',
      arrivalDate: '',
      arrivalTime: '',
      carrier: '',
      stops: '',
      price: '',
      id: ''
    };

  sendForm() {
    console.log(this.ticket);
  }
}
