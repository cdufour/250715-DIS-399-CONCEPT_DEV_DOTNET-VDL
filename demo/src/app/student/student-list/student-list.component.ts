import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'student-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  areAllGradesVisible: boolean = false;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    // fetch('http://localhost:3000/students')
    //   .then(res => res.json())
    //   .then(students => console.log(students))
    this.studentService
      .getStudents()
      .subscribe((students: Student[]) => this.students = students)
  }

  deleteStudent(student: Student) {
    console.log(student);
    
    // supprimer l'étudiant de la liste
    let updatedStudents = this.students.filter(s => s.id != student.id);
    this.students = updatedStudents; // view re-render

  }

  

}
