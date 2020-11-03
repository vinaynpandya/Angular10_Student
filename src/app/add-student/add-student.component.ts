import { Component, OnInit } from '@angular/core';
import { HttpClientService, Student } from '../service/http-client.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  user: Student = new Student(0,"","","","");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    //console.log("test");
  }

  createStudent(): void {
    //console.log("test2");
    this.httpClientService.createStudent(this.user)
        .subscribe( data => {
          alert("student created successfully.");
        });

  };

}
