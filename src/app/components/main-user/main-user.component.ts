import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.userService.logout() ;
    this.router.navigate(['login']) ;
  }

  testData(){
    this.userService.getProfile().subscribe(res => {
      console.log(res)
    })
  }

}
