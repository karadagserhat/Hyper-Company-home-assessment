import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectSelectedColor } from '../../../store/reducers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private store: Store) {}

  selectedColor$ = this.store.select(selectSelectedColor);
}
