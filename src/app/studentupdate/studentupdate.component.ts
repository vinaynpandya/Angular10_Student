import { Component, OnInit } from '@angular/core';
import { HttpClientService, Student } from '../service/http-client.service';

@Component({
  selector: 'studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class UpdateStudentComponent implements OnInit{
  students: Student[];

  constructor(private studentService: HttpClientService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      response =>{this.students = response;}
     );
  }

  onRowEditInit(student: Student) {
    console.log('Row edit initialized');
  }

  onRowEditSave(student: Student) {
    this.studentService.updateStudent(student)
        .subscribe( data => {
          alert("Student updated successfully.");
        });
    console.log('Row edit saved');
  }

  onRowEditCancel(student: Student, index: number) {
    console.log('Row edit cancelled');
  }

}