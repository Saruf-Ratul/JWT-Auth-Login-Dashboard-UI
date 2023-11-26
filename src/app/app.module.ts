// app.module.ts
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './dashbord/footer/footer.component';
import { HeaderComponent } from './dashbord/header/header.component';
import { NavbarComponent } from './dashbord/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { AppointmentPageComponent } from './page/appointment-page/appointment-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomePageComponent,
    AboutPageComponent,
    AppointmentPageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzMessageModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzMenuModule,
    NzIconModule,
    NzToolTipModule,
    HttpClientJsonpModule,
    ScrollingModule,
    DragDropModule,
    CalendarModule,
    NgChartsModule,
    NzCalendarModule,
    NzEmptyModule,
    NzDividerModule,
    NzGridModule,
    NzProgressModule,
    NzCardModule

    // DemoNgZorroAntdModule



  ],
  providers: [NzMessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
