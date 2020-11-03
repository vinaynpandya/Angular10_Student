import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './studentdelete/studentdel.component';
import { UpdateStudentComponent } from './studentupdate/studentupdate.component';

const routes: Routes = [
  { path:'', component: StudentComponent},
  { path:'addstudent', component: AddStudentComponent},
  { path:'deletestudent', component: DeleteStudentComponent},
  { path:'updatestudent', component: UpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
