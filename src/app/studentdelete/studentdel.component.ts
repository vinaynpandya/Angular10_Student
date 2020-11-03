import { Component, OnInit } from '@angular/core';
import { HttpClientService, Student } from '../service/http-client.service';

@Component({
  selector: 'app-student',
  templateUrl: './studentdel.component.html',
  styleUrls: ['./studentdel.component.css']
})
export class DeleteStudentComponent implements OnInit {

  students: Student[];
   
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getStudents().subscribe(
     response =>{this.students = response;}
    );
  }

  deleteStudent(student: Student): void {
    this.httpClientService.deleteStudent(student)
      .subscribe( data => {
        this.students = this.students.filter(u => u !== student);
      })
  };

 
}
