import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { Student } from 'src/app/model/student';
import { StudentDataService } from 'src/app/service/student-data.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  sid: number;
  student: Student;
  enroll: Array<Course>;

  constructor(private _route: ActivatedRoute,
     private _studentService: StudentService,
      public _studentData: StudentDataService,
      private _router: Router) { }

  ngOnInit(): void {
    const routeParams = this._route.snapshot.paramMap;
    this.sid = Number(routeParams.get('id'));

    this._studentService.getStudentById(this.sid).subscribe(data => this.student = data);

    this._studentService.getEnroll(this.sid).subscribe(data => {this.enroll = data;});
    
  }

  ngOnDestroy() {
    this._studentData.studentData = this.student;
  }

  onSubmitDelete() {
    this._studentService.deleteStudent(this.sid).subscribe(data => this._router.navigate(['/student']));
  }

}
