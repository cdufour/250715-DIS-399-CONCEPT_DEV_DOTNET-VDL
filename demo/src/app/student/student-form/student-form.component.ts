import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'student-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  student: Student = { name: "", grade: 10 }
  message: string = '';
  hideBtn: boolean = false;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  onSubmit() {
    console.log('submit');
    this.studentService
      .postStudent(this.student)
      .subscribe(student => {
        console.log(student);
        this.message = "Student added with success";

        // masquer le bouton d'ajout
        this.hideBtn = true;
        
        // redirection de l'utilisateur vers 
        // la liste au bout de 3 secondes
        setTimeout(() => {
          this.router.navigate(['/students']);
        }, 3000);
        
      
      })
  }
}
