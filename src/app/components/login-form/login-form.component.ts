import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/user';
import { addFormFeedback, closeLoader, openLoader } from 'src/app/utils/functions';
import IFormError from 'src/app/utils/interfaces/iformError';
import IUser from 'src/app/utils/interfaces/iuser';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  submit(formObj:any,formElement:HTMLFormElement){
    let formData = formObj.value as IUser;

    let user = new User(formData);

    if(user.formError.length){
      addFormFeedback(formElement,user.formError);
    }else{
      openLoader();
      user.login()
      .then((resp)=>{
        console.log("userCredential(login)",resp);
        formElement.reset();
        this.router.navigateByUrl("panel");
      })
      .catch(resp=>{
        let errorFeedback = resp as IFormError
        addFormFeedback(formElement, [errorFeedback])
      })
      .finally(closeLoader);
    }
  }

}
