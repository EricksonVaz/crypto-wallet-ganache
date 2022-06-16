import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Account from 'src/app/models/account';
import IAccount from 'src/app/utils/interfaces/iAccount';
import swal from 'sweetalert';
import { AccountsContainerComponent } from '../accounts-container/accounts-container.component';
import { ModalEditAccountComponent } from '../modal-edit-account/modal-edit-account.component';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  @Output() openModalEditAccount = new EventEmitter();
  @Output() openModalGetKey = new EventEmitter();
  @Output() openModalTransfer = new EventEmitter();

  static component:AccountDetailsComponent;
  accountSelected?:IAccount;
  balance?:string;

  isAccountSlected:Boolean = false;

  constructor() {
    AccountDetailsComponent.component = this;
  }

  ngOnInit(): void {
  }

  openModalEdit(){
    ModalEditAccountComponent.component.privateKey = this.accountSelected?.private_key!;
    this.openModalEditAccount.emit();
  }

  openModalKey(){
    this.openModalGetKey.emit();
  }

  openModalTrans(){
    this.openModalTransfer.emit();
  }

  showAccountDetail(account:IAccount){
    this.isAccountSlected = true;
    this.accountSelected = account;
    this.balance = "0"
    Account.balance(account.public_key!).then(amount=>{
      console.log("amount",amount)
      if(typeof amount==="string") this.balance = amount;
    });
  }

  deleteAccount(){
    swal({
      title: "Tens a certeza?",
      text: "Ao eliminar esta conta todo o histórico de transações se perderá",
      icon: "warning",
      buttons: ["cancelar","continuar"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Account.delete(this.accountSelected?.private_key!);
        AccountsContainerComponent.accountComponent.updateListAccounts();
        AccountDetailsComponent.component.isAccountSlected = false;
      }
    });
  }

  nextFeature(){
    swal("Esta funcionalidade esta a ser trabalhada")
  }

}
