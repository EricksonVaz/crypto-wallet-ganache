import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { checkUserLoggedState } from 'src/app/utils/functions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    checkUserLoggedState(()=>{
      this.router.navigateByUrl("panel");
    });
  }

}
