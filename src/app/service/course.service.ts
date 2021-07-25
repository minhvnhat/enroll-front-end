import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Course } from '../model/course';
import { catchError, map } from "rxjs/operators"; 
import { Student } from '../model/student';
import { EnrollForm } from '../model/enroll-form';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private _http: HttpClient) { }

  getCourseById(cid: number): Observable<Course> {
    let url = "http://localhost:8080/courses/" + cid;
    return this._http.get<Course>(url);
  }

  getCourses(): Observable<Course[]> {
    let url: string = "http://localhost:8080/courses";
      return this._http.get<Course[]>(url)
      .pipe(map((result:any)=>result._embedded.courses));
  }

  getEnrollStudents(cid: number): Observable<Student[]> {
    let url: string = "http://localhost:8080/courses/" + cid + "/studentList";
      return this._http.get<Student[]>(url)
      .pipe(map((result:any)=>{
        return result._embedded.students;
      }));
  }

  enrollStudent(enrollForm: EnrollForm, cid: number) {
    let url = "http://localhost:8080/courses/" + cid + "/enroll";
    return this._http.post<any>(url, enrollForm)
    .pipe(catchError( (err) => {
      console.log(err);
      return this.errorHandler(err);
    }
    ));
  }

  getMostEnrolled() {
    let url = "http://localhost:8080/courses/most_enroll";
    return this._http.get<Student[]>(url)
      .pipe(map((result:any)=>{
        return result;
      }));
  }
 
  addCourse(course: Course) {
    let url = "http://localhost:8080/courses/"
    return this._http.post<any>(url, course)
    .pipe(catchError( (err) => {
      console.log(err);
      return this.errorHandler(err);
    }
    ));
  }
  
  deleteCourse(cid: number) {
    let url = "http://localhost:8080/courses/" + cid;
    return this._http.delete<any>(url)
    .pipe(catchError( (err) => {
      console.log(err);
      return this.errorHandler(err);
    }
    ));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
