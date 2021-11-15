import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Quiz } from '../Quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  quizes: Array <Quiz> =[];
  addForm:FormGroup
  constructor(private fb: FormBuilder,private QuizService: QuizService) { }
saveQuiz(){
  if (this.addForm.valid) {
    let options= this.getOptions()
    let params= {
      question: this.addForm.value.question,
      opt: options,
      answer: this.addForm.value.answer
    } 
    this.QuizService.addQuiz(params)
    .subscribe(response=> {
      this.addForm.reset()
    })
  }
}

 getOptions(){
   let opt=['opt1','opt2','opt3','opt4']
   let optionArray: Array<any>=[]
   opt.map(choice =>{
     optionArray.push(this.addForm.controls[choice].value)
   })
   return optionArray
 }
addQuizForm(){
  this.addForm=this.fb.group({
    question: ['', Validators.required],
      opt1: ['', Validators.required],
      opt2: ['', Validators.required],
      opt3: ['', Validators.required],
      opt4: ['', Validators.required],
      answer: ['', Validators.required]
  })
}
ngOnInit(){
 this.addQuizForm()
}


}
