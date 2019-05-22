import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss']
})
export class EditTicketComponent implements OnInit {
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

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params) => {
      console.log(params);
    });
  }

  sendForm() {
    console.log(this.ticket);
  }

}
