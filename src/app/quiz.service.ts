import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '.././environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  
  public loginfromDB(user:any):Observable<any>{
    return this.http.post<any>(environment.baseUrl4,user)
    
  }


  viewQuiz(){
    return this.http.get(environment.baseUrl)
   }
   deleteQuiz(id :number){
     return this.http.delete(environment.baseUrl2 + id)
   }
   addQuiz(course: any){
     return this.http.post(environment.baseUrl1, course)
   }
   saveAns(questionId: number,answerId: number){
    let reqbody ={
      id: questionId,
      answer: answerId
      }
    return this.http.post(environment.baseUrl3+"save",reqbody)
  }
  getResult(){
    return this.http.get(environment.baseUrl3+"fetchAll");
  }
   }


