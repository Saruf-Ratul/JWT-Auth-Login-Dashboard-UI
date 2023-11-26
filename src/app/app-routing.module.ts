// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { AppointmentPageComponent } from './page/appointment-page/appointment-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'appointment-admin', component: AppointmentPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'dashboard', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
