import { Component, OnInit } from '@angular/core';
import { Quiz } from '../Quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {
  quizes: Array <Quiz> =[];
  constructor(private QuizService: QuizService) { }


  ngOnInit(): void {
    console.log('called once on load of the component')
    this.QuizService.viewQuiz()
    .subscribe((res: any)=> {
      //console.log(res);
      this.quizes=res;
      console.log(this.quizes);
    
    });
  }

}
