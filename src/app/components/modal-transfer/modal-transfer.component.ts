import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Transfer from 'src/app/models/transfer';
import { addFormFeedback, closeLoader, openLoader } from 'src/app/utils/functions';
import IFormError from 'src/app/utils/interfaces/iformError';
import ITransfer from 'src/app/utils/interfaces/iTransfer';
import swal from 'src/app/utils/sweetalert';
import { AccountDetailsComponent } from '../account-details/account-details.component';
import { AccountTransactionsComponent } from '../account-transactions/account-transactions.component';

@Component({
  selector: 'app-modal-transfer',
  templateUrl: './modal-transfer.component.html',
  styleUrls: ['./modal-transfer.component.css']
})
export class ModalTransferComponent implements OnInit {
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
    let formData = formObj.value as ITransfer;
    let accountComponent = AccountDetailsComponent.component.accountSelected;
    let address = accountComponent?.public_key;
    let private_key = accountComponent?.private_key;

    let transfer = new Transfer(formData,address!,private_key!);

    if(transfer.formError.length){
      addFormFeedback(formElement,transfer.formError);
    }else{
      openLoader();
      transfer.transferAmount()
      .then((resp)=>{
        if(Array.isArray(resp)){
          addFormFeedback(formElement, resp)
        }else{
          transfer.saveTransaction(resp);
          formElement.reset();
          swal({
            title: "Pronto",
            text: "Transação concluída com sucesso",
            icon: "success"
          });
          AccountDetailsComponent.component.showAccountDetail(accountComponent!);
          AccountTransactionsComponent.component.updateListtransactions();
        }
      })
      .catch(resp=>{
        let errorFeedback = resp as IFormError
        addFormFeedback(formElement, [errorFeedback])
      })
      .finally(closeLoader);
    }
  }

}
