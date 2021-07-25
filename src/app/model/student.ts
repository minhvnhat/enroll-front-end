import { Course } from "./course";

export interface Student {
    sid?: number,
    name: string,
    email: string,
    phone: string,
    dob: string,
    enroll?: Array<Course>
}