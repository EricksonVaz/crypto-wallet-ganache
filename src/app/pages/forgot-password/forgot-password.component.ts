import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { checkUserLoggedState } from 'src/app/utils/functions';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    checkUserLoggedState(()=>{
      this.router.navigateByUrl("panel");
    });
  }

}
