import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from "../../service/user.service";
 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  
  onSubmit(signupForm : NgForm) {
    if(signupForm.invalid){
        return ;
    }
    this.userService.createAccount(signupForm.value).subscribe(res => {
        console.log('Create Account')
        console.log(signupForm.value) ;
        signupForm.resetForm() ;
    })
  }

}
