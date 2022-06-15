import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Account from 'src/app/models/account';
import User from 'src/app/models/user';
import { addFormFeedback, closeLoader, openLoader } from 'src/app/utils/functions';
import IFormError from 'src/app/utils/interfaces/iformError';
import { AccountDetailsComponent } from '../account-details/account-details.component';

@Component({
  selector: 'app-modal-get-private-key',
  templateUrl: './modal-get-private-key.component.html',
  styleUrls: ['./modal-get-private-key.component.css']
})
export class ModalGetPrivateKeyComponent implements OnInit {
  @Input("isOpen") isOpen = false;
  @Output("closeModal") closeModal = new EventEmitter();
  showPrivateKey:boolean = false;
  privateKey:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.isOpen = false;
    this.showPrivateKey = false;
    this.closeModal.emit();
  }

  submit(formObj:any,formElement:HTMLFormElement){
    let formData = formObj.value as object;

    if("password" in formData){
      User.validatePassword((formData as any).password || "").then(resp=>{
        if(resp){
          this.privateKey = AccountDetailsComponent.component.accountSelected?.private_key!;
          formElement.reset();
          this.showPrivateKey = true;
        }else{
          addFormFeedback(formElement,[{
            formControl:"password",
            errorFeedback:"password incorrecto",
            currentValue:""
          }]);
        }
      });
    }else{
      addFormFeedback(formElement,[{
        formControl:"password",
        errorFeedback:"dados inválidos",
        currentValue:""
      }]);
    }
  }

}
