import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms'
import { UserService } from "../../service/user.service";
import Swal from "sweetalert2" ;
 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  
  onSubmit(signupForm : NgForm) {
    if(signupForm.invalid){
        return ;
    }
    this.userService.createAccount(signupForm.value).subscribe(res => {
        console.log(res) ;

        signupForm.resetForm() ;
        Swal.fire({
          icon: 'success',
          title: 'Your account has been created',
          showConfirmButton: false,
          timer: 2000
        })

        this.router.navigate(['login'])
    })
  }

}
