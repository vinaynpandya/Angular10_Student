import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Student{
  constructor(
    public id:number,
    public fname:string,
    public lname:string,
    public major:string,
    public college:string,
  ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getStudents()
  {
    console.log("test call");
    return this.httpClient.get<Student[]>('http://localhost:8080/services/students');
  }

  public deleteStudent(student) {
    return this.httpClient.delete<Student>("http://localhost:8080/services/student" + "/"+ student.id);
  }

  public createStudent(student) {
    return this.httpClient.post<Student>("http://localhost:8080/services/student", student);
  }

  public getStudentById(student) {
    return this.httpClient.get<Student>("http://localhost:8080/services/student" + "/"+ student.id);
  }

  public updateStudent(student) {
    return this.httpClient.put<Student>("http://localhost:8080/services/student"+ "/"+ student.id, student);
  }
}
