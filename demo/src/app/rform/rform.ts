import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.html',
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class Rform {
  studentForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    grade: new FormControl('10', [Validators.min(0), Validators.max(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    postcode: new FormControl('', [Validators.required, Validators.pattern(/\d{5}/g)]),
  })
}