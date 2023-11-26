import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.authService.redirectToLogin();
    }
  }

}
