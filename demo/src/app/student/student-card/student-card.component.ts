import { Component, Input, output } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'student-student-card',
  standalone: false,
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input() student: Student | null = null;
  @Input() isGradeVisible: boolean = false;
  onDelete = output<Student>();

  constructor(private studentService: StudentService) {}

  deleteStudent() {
    console.log('delete', this.student?.id);

    if (this.student) {
      this.studentService
        .deleteStudent(this.student)
        .subscribe(student => {
          console.log('student', student.id, '=> DELETED');

          // ToDO: refresh student list

          this.onDelete.emit(student);
        })
    }
    
  }
}
