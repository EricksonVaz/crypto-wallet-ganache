import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/user';
import EUserAction from 'src/app/utils/enums/EUserActions';
import { addFormFeedback, closeLoader, openLoader } from 'src/app/utils/functions';
import IFormError from 'src/app/utils/interfaces/iformError';
import IUser from 'src/app/utils/interfaces/iuser';
import swal from 'sweetalert';

@Component({
  selector: 'app-forgot-form',
  templateUrl: './forgot-form.component.html',
  styleUrls: ['./forgot-form.component.css']
})
export class ForgotFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit(formObj:any,formElement:HTMLFormElement){
    let formData = formObj.value as IUser;

    let user = new User(formData,EUserAction.reset);

    if(user.formError.length){
      addFormFeedback(formElement,user.formError);
    }else{
      openLoader();
      user.reset()
      .then((resp)=>{
        formElement.reset();
        this.router.navigateByUrl("login");
        swal({
          title: "Pronto",
          text: "Link enviado para seu email",
          icon: "success"
        });
      })
      .catch(resp=>{
        let errorFeedback = resp as IFormError
        addFormFeedback(formElement, [errorFeedback])
      })
      .finally(closeLoader);
    }
  }

}
