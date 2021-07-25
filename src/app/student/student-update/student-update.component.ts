import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentDataService } from 'src/app/service/student-data.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  student: Student;
  errorMsg: string;


  constructor(private _studentService: StudentService, public _studentData: StudentDataService, private _router: Router) { }

  ngOnInit(): void {
    this.student = this._studentData.studentData;
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
