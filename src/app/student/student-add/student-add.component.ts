import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  student: Student = {
    name: null,
    email: null,
    phone: null,
    dob: null
  };

  errorMsg: string;

  constructor(private _studentService: StudentService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._studentService.addStudent(this.student).subscribe(
      data => {
        console.log("success!" + data);
        this._router.navigate(['/student']);
      },
      error => this.errorMsg = error.status
    );
  }
}
