import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any
  msg: any
  loginForm: FormGroup
  constructor(private QuizService: QuizService, private activatedRoute: ActivatedRoute,
    private router: Router,private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm()
  }
  loginpage() {
   
    
    if(this.loginForm.valid){
      this.QuizService.loginfromDB(this.loginForm.value).subscribe(
          data => {
            console.log("Response Recieved");
            this.router.navigate(['/crud'])
          },
          error => {
            console.log("Exception Occurred");
            this.msg = "Please Enter Valid Credential";
          }
         ) 
    }
    

    
  }
 createForm(){
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
 }
}
