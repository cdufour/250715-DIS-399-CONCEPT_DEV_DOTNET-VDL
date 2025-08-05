import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Student = {
  name: string;
  grade: number;
}

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = [
    { name: "Axel", grade: 18 },
    { name: "Kevin", grade: 15 },
    { name: "Tom", grade: 2 },
  ];

  style1: any = {
    color: 'green',
    fontSize: '30pt'
  };

  style2: any = {
    fontSize: '40pt',
    fontWeight: 'bold',
    textDecoration: 'underline'
  };

  class1: any = {
    winner: true,
    loser: false
  }

  constructor() {

    setTimeout(() => {
      this.style1.color = 'orange';
      this.class1.loser = true;
    }, 5000);

  }
}
