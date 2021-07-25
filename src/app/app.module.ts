import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { CourseUpdateComponent } from './course/course-update/course-update.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    StudentUpdateComponent,
    CourseDetailComponent,
    CourseAddComponent,
    CourseUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
