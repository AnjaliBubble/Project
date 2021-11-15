import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { CrudComponent } from './crud/crud.component';
import { DeleteQuizComponent } from './delete-quiz/delete-quiz.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { ViewQuizComponent } from './view-quiz/view-quiz.component';

 const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'crud',component:CrudComponent},
  {path:'view',component:ViewQuizComponent},
  {path:'quiz',component:QuizComponent},
  {path:'add',component:AddQuizComponent},
  {path:'delete',component:DeleteQuizComponent},
  {path:'result',component:ResultComponent},
  //{path:'',redirectTo:'/register',pathMatch:'full'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
