// appointment.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'localhost:5000/api/appointment';

  constructor(private http: HttpClient) {}

  // Implement methods to interact with the appointment-related API endpoints
}
