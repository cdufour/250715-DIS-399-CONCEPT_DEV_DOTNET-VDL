import { Component, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'student-student-card',
  standalone: false,
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input() student: Student | null = null;
  @Input() isGradeVisible: boolean = false;
}
