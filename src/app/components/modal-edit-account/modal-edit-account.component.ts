import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Account from 'src/app/models/account';
import EAccountAction from 'src/app/utils/enums/EAccountActions';
import { addFormFeedback, closeLoader, openLoader } from 'src/app/utils/functions';
import IAccount from 'src/app/utils/interfaces/iAccount';
import IFormError from 'src/app/utils/interfaces/iformError';
import swal from 'src/app/utils/sweetalert';
import { AccountDetailsComponent } from '../account-details/account-details.component';
import { AccountsContainerComponent } from '../accounts-container/accounts-container.component';

@Component({
  selector: 'app-modal-edit-account',
  templateUrl: './modal-edit-account.component.html',
  styleUrls: ['./modal-edit-account.component.css']
})
export class ModalEditAccountComponent implements OnInit {
  @Input("isOpen") isOpen = false;
  @Output("closeModal") closeModal = new EventEmitter();
  static component:ModalEditAccountComponent;
  private _privateKey?:string;
  constructor() {
    ModalEditAccountComponent.component = this;
   }

  ngOnInit(): void {
  }

  set privateKey(privateKey:string){
    this._privateKey = privateKey;
  }

  close(){
    this.isOpen = false;
    this.closeModal.emit();
  }

  submit(formObj:any,formElement:HTMLFormElement){
    let formData = formObj.value as IAccount;

    let account = new Account(formData,EAccountAction.update);

    if(account.formError.length){
      addFormFeedback(formElement,account.formError);
    }else{
      openLoader();
      account.update(this._privateKey!)
      .then((resp)=>{
        formElement.reset();
        swal({
          title: "Pronto",
          text: "Conta atualizada com sucesso",
          icon: "success"
        });
        AccountsContainerComponent.accountComponent.updateListAccounts();
        AccountDetailsComponent.component.showAccountDetail(resp);
      })
      .catch(resp=>{
        let errorFeedback = resp as IFormError
        addFormFeedback(formElement, [errorFeedback])
      })
      .finally(closeLoader);
    }
  }
}
