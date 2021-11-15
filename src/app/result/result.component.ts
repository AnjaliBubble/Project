import { Component, OnInit } from '@angular/core';
import { Quiz } from '../Quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
 ansIncrement: number=0
 qstIncrement: number=0
 quizes: Array<Quiz>=[]
 resultArray: Array<any>=[]
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.fetchQuiz();
    this.getCorrectAnswer()
  }
  getCorrectAnswer(): void{
    this.quizService.getResult()
    .subscribe((res: any)=>{
      this.resultArray=res;
      this.quizes.forEach(element => {
        this.resultArray.forEach(ele=>{
          if(element.id===ele.qstId){
          element.selectedId=ele.answerId;
          if(element.answer===ele.answerId){
            element.result=true;
            }else{
            element.result=false;
            }
          }
        
        })
      })
      this.qstIncrement=this.quizes.length
      this.getAnswerIncrement() 
    }) 
  }

  fetchQuiz(){
    this.quizService.viewQuiz()
    .subscribe((res: any)=>{
      this.quizes=res;
    });
  
  }

  getAnswerIncrement(){
    this.quizes.forEach(element=>{
      if(element.result)
      this.ansIncrement++;
    })
  }
}
