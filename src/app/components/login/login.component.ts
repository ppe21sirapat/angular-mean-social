import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms' ;
import { UserService } from "../../service/user.service" ;
import Swal from "sweetalert2" ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router 
    ) { }

  ngOnInit(): void {
  }

  test_user = ''
  test_password = ''
  alert_message = ''

  onLogin(loginForm : NgForm){
    this.test_user = loginForm.value.username ;
    this.test_password  =  loginForm.value.password ;

    this.userService.loginCheck(loginForm.value).subscribe((res: any) => {
      console.log(res)
      if(res.message == 'success')
      {
        this.router.navigate(['main'])
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Welcome ' + res.user.username
        })
      }
      else if(res.message == 'fail')
      {
        this.alert_message = 'Username or Password Incorrect !'
      }
    })
  }
}
