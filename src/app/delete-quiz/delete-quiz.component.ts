import { Component, OnInit } from '@angular/core';
import { Quiz } from '../Quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-delete-quiz',
  templateUrl: './delete-quiz.component.html',
  styleUrls: ['./delete-quiz.component.css']
})
export class DeleteQuizComponent implements OnInit {
  quizes: Array <Quiz> =[];
  constructor(private QuizService: QuizService) { }
  
  
 
  ngOnInit(): void {
    console.log('called once on load of the component')
    this.view() 
  }
  view(){
    this.QuizService.viewQuiz()
    .subscribe((res: any)=> {
      console.log(res);
      this.quizes =res;
    });
  }
  deleteQuiz(id: number){
    this.QuizService.deleteQuiz(id).subscribe((res: any)=> {
    this.view() 
    });

  }
}


