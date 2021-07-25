import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { EnrollForm } from 'src/app/model/enroll-form';
import { Student } from 'src/app/model/student';
import { CourseDataService } from 'src/app/service/course-data.service';
import { CourseService } from 'src/app/service/course.service';

@Component({
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  cid: number;
  course: Course;
  studentEnrolled: Array<Student>;
  errorMsg: string;

  enrollForm: EnrollForm = {
    sid: null,
    op: null
  };

  constructor(private _route: ActivatedRoute,
     private _courseService: CourseService,
      public _courseData: CourseDataService,
      private _router: Router) { }

  ngOnInit(): void {
    const routeParams = this._route.snapshot.paramMap;
    this.cid = Number(routeParams.get('id'));

    this._courseService.getCourseById(this.cid).subscribe(data => this.course = data);
    
    this._courseService.getEnrollStudents(this.cid).subscribe(data => this.studentEnrolled = data);
  }

  ngOnDestroy() {
    this._courseData.courseData = this.course;
  }

  onSubmitDelete() {
    this._courseService.deleteCourse(this.cid).subscribe(data => this._router.navigate(['/course']));
  }

  onSubmitEnroll() {
    this._courseService.enrollStudent(this.enrollForm, this.cid).subscribe(
      data => {
        console.log("success!" + data);
        window.location.reload();
      },
      error => this.errorMsg = error.status
    );;
  }
}
