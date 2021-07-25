import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.css']
})
export class StudentIndexComponent implements OnInit {
  students: Student[];
  // res: string;
  constructor(private _studentService: StudentService, private http: HttpClient) { }

  ngOnInit(): void {
    this._studentService.getStudents().subscribe(data => this.students = data);
  }

}
