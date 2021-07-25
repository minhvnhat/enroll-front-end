import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseIndexComponent } from './course/course-index/course-index.component';
import { CourseUpdateComponent } from './course/course-update/course-update.component';
import { StudentAddComponent } from './student/student-add/student-add.component';

import { StudentIndexComponent } from './student/student-index/student-index.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';

const routes: Routes = [
  { path: 'student', component: StudentIndexComponent },
  { path: 'student/profile/:id', component: StudentProfileComponent },
  { path: 'student/add', component:StudentAddComponent},
  { path: 'student/profile/:id/edit', component: StudentUpdateComponent},
  { path: 'course', component: CourseIndexComponent},
  { path: 'course/detail/:id', component: CourseDetailComponent },
  { path: 'course/add', component:CourseAddComponent},
  { path: 'course/detail/:id/edit', component: CourseUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
    [StudentIndexComponent,
    StudentProfileComponent,
    StudentAddComponent,
    StudentUpdateComponent,
    CourseIndexComponent,
    CourseDetailComponent,
    CourseAddComponent,
    CourseUpdateComponent]