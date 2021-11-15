import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../Quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizes: Array<Quiz> = []
  question: Array<Quiz> = []
  questionId: number ;
  answerId: number ;
  increment: number =0;
  quizLength: number ;
  buttonDisable: boolean = true
  constructor(private QuizService: QuizService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.fetchquizes();

  }
  fetchquizes() {
    console.log('called once on load of the component')
    this.QuizService.viewQuiz()
      .subscribe((res: any) => {
        //console.log(res);
        this.quizes = res;
        this.question.push(this.quizes[this.increment])
        this.quizLength = this.quizes.length;
      });
  }

  chooseAnswer(qId: number,cId: number){
  this.buttonDisable=false;
  this.questionId=qId;
  this.answerId=cId;
  }
  nextQuestion(questId:number) {
    this.buttonDisable = true;
    this.increment = this.increment + 1;
    this.QuizService.saveAns(this.questionId, this.answerId)
      .subscribe((res: any) => {
        console.log(res);
      });
    if (this.increment < this.quizLength) {
      console.log("ArrayLength", this.quizLength);
      this.question = [];

      this.question.push(this.quizes[this.increment]);

    }

    else {
      this.router.navigate(['/result'], {
        relativeTo: this.activatedRoute
      })
    }
  }

}

