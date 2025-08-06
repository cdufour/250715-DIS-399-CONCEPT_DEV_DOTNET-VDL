import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'student-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  students: Student[] = [];

  constructor(private studentService: StudentService) {
    
    // fetch('http://localhost:3000/students')
    //   .then(res => res.json())
    //   .then(students => console.log(students))

    this.studentService
      .getStudents()
      .subscribe((students: any) => this.students = students)
    

  }

}
