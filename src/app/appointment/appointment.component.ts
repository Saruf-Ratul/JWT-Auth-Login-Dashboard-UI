// appointment.component.ts
import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  // Add properties and methods related to the appointment component

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    // Fetch and display appointments when the component initializes
  }
}
