import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { CrudComponent } from './crud/crud.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { DeleteQuizComponent } from './delete-quiz/delete-quiz.component';
import { ViewQuizComponent } from './view-quiz/view-quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizComponent,
    ResultComponent,
    CrudComponent,
    AddQuizComponent,
    DeleteQuizComponent,
    ViewQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 

  ],
  exports:[
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
