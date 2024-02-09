import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SidebarComponent,
  ],
  templateUrl: './secondPage.component.html',
  styleUrl: './secondPage.component.css',
})
export class SecondPageComponent {}
