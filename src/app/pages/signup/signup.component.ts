import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { checkUserLoggedState } from 'src/app/utils/functions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    checkUserLoggedState(()=>{
      this.router.navigateByUrl("panel");
    });
  }

}
