import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Account from 'src/app/models/account';
import { addFormFeedback, closeLoader, openLoader } from 'src/app/utils/functions';
import IAccount from 'src/app/utils/interfaces/iAccount';
import IFormError from 'src/app/utils/interfaces/iformError';
import swal from 'sweetalert';
import { AccountsContainerComponent } from '../accounts-container/accounts-container.component';

@Component({
  selector: 'app-modal-add-account',
  templateUrl: './modal-add-account.component.html',
  styleUrls: ['./modal-add-account.component.css']
})
export class ModalAddAccountComponent implements OnInit {
  @Input("isOpen") isOpen = false;
  @Output("closeModal") closeModal = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.isOpen = false;
    this.closeModal.emit();
  }

  submit(formObj:any,formElement:HTMLFormElement){
    let formData = formObj.value as IAccount;

    let account = new Account(formData);

    if(account.formError.length){
      addFormFeedback(formElement,account.formError);
    }else{
      openLoader();
      account.create()
      .then((resp)=>{
        formElement.reset();
        swal({
          title: "Pronto",
          text: "Conta adicionada com sucesso",
          icon: "success"
        });
        AccountsContainerComponent.accountComponent.updateListAccounts();
      })
      .catch(resp=>{
        let errorFeedback = resp as IFormError
        addFormFeedback(formElement, [errorFeedback])
      })
      .finally(closeLoader);
    }
  }

}
