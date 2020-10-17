import { Component, OnInit } from '@angular/core';
import {FlightsService} from "../services/flights.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flightsService.getFlights();
  }

}
