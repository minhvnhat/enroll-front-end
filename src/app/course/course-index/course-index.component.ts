import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  templateUrl: './course-index.component.html',
  styleUrls: ['./course-index.component.css']
})
export class CourseIndexComponent implements OnInit {
  courses: Course[];
  // res: string;
  constructor(private _courseService: CourseService, private _http: HttpClient) { }

  ngOnInit(): void {
    this._courseService.getCourses().subscribe(data => this.courses = data);
  }
}
