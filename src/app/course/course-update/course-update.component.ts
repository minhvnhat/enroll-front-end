import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { CourseDataService } from 'src/app/service/course-data.service';
import { CourseService } from 'src/app/service/course.service';

@Component({
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {
  course: Course;
  errorMsg: string;


  constructor(private _courseService: CourseService, public _courseData: CourseDataService, private _router: Router) { }

  ngOnInit(): void {
    this.course = this._courseData.courseData;
  }

  onSubmit() {
    this._courseService.addCourse(this.course).subscribe(
      data => {
        console.log("success!" + data);
        this._router.navigate(['/course']);
      },
      error => this.errorMsg = error.status
    );
  }
}
