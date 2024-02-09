import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SidebarComponent,
  ],
  templateUrl: './firstPage.component.html',
  styleUrl: './firstPage.component.css',
})
export class FirstPageComponent {}
