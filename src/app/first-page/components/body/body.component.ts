import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectColors,
  selectIsSubmitting,
  selectSelectedColor,
} from '../../../store/reducers';
import { CommonModule } from '@angular/common';
import { formActions } from '../../../store/actions';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, ReactiveFormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent implements OnInit {
  textField1: any;
  textField2: any;
  textField3: any;
  textField4: any;

  rgb!: string;

  form = this.fb.nonNullable.group({
    text1: ['', Validators.required],
    text2: ['', Validators.required],
    text3: ['', Validators.required],
    text4: ['', Validators.required],
  });

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    colors: this.store.select(selectColors),
    selectedColor: this.store.select(selectSelectedColor),
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(formActions.submitFirstFormIdle());
  }

  onSubmit() {
    this.store.dispatch(formActions.submitFirstForm());
    this.router.navigateByUrl('/second');
  }

  onClickReset() {
    this.store.dispatch(formActions.resetFirstForm());
    this.textField1 = '';
    this.textField2 = '';
    this.textField3 = '';
    this.textField4 = '';
  }

  changeColor(a: any) {
    this.rgb = a.target.style.backgroundColor;
    this.store.dispatch(formActions.setSelectColor({ rgb: this.rgb }));
  }

  counter(i: number) {
    return Array.from({ length: i }, (v, i) => i);
    // [0, 1, 2, 3, 4, ...]
  }
}
