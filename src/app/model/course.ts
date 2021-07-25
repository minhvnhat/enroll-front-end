import { Student } from "./student";

export interface Course {
    cid?: number,
    name: string,
    startDate: string,
    endDate: string,
    studentList?: Array<Student>
}