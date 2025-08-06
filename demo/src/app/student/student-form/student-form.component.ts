import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'student-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  student: Student = { name: "", grade: 10 }
  message: string = '';

  constructor(private studentService: StudentService) {}

  onSubmit() {
    console.log('submit');
    this.studentService
      .postStudent(this.student)
      .subscribe(student => {
        console.log(student);
        this.message = "Student added with success";
      })
  }
}
