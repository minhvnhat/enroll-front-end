import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  course: Course = {
    name: null,
    startDate: null,
    endDate: null
  };

  errorMsg: string;

  constructor(private _courseService: CourseService, private _router: Router) { }

  ngOnInit(): void {
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
