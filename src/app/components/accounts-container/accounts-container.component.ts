import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import IAccount from 'src/app/utils/interfaces/iAccount';
import Account from 'src/app/models/account';

@Component({
  selector: 'app-accounts-container',
  templateUrl: './accounts-container.component.html',
  styleUrls: ['./accounts-container.component.css']
})
export class AccountsContainerComponent implements OnInit {
  @Output() openModalAddAccount = new EventEmitter();
  @Output("accountSelected") accountSelected = new EventEmitter();
  public listAccounts:IAccount[] = [];
  static accountComponent:AccountsContainerComponent;
  constructor(private clipBoard:Clipboard) {
    AccountsContainerComponent.accountComponent = this;
  }

  ngOnInit(): void {
    this.updateListAccounts();
  }

  selectAccount(cardItem:HTMLDivElement,account:IAccount){
    let pararentEl = cardItem.closest(".account-container");
    let currentElementSelected = pararentEl?.querySelector(".select");
    if(currentElementSelected)currentElementSelected.classList.remove("select");

    cardItem.classList.add("select");

    this.accountSelected.emit(account);
  }

  openModalAddNewAccount(){
    this.openModalAddAccount.emit();
  }

  copyAddress(value:string){
    this.clipBoard.copy(value||"");
  }

  updateListAccounts(){
    Account.listAll().then(resp=>{
      this.listAccounts = resp;
    });
  }

}
