import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-accounts-container',
  templateUrl: './accounts-container.component.html',
  styleUrls: ['./accounts-container.component.css']
})
export class AccountsContainerComponent implements OnInit {
  @Output() openModalAddAccount = new EventEmitter();
  public listAccounts = [
    {
      name:"Account 1",
      address:"0x4rt...itre",
    },
    {
      name:"Account 2",
      address:"0x4rt...itre"
    },
    {
      name:"Account 3",
      address:"0x4rt...itre"
    },
    {
      name:"Account 4",
      address:"0x4rt...itre"
    },
    {
      name:"Account 5",
      address:"0x4rt...itre"
    },
    {
      name:"Account 6",
      address:"0x4rt...itre"
    },
    {
      name:"Account 7",
      address:"0x4rt...itre"
    }
  ]
  constructor(private clipBoard:Clipboard) { }

  ngOnInit(): void {
  }

  selectAccount(cardItem:HTMLDivElement){
    let pararentEl = cardItem.closest(".account-container");
    let currentElementSelected = pararentEl?.querySelector(".select");
    if(currentElementSelected)currentElementSelected.classList.remove("select");

    cardItem.classList.add("select");
  }

  openModalAddNewAccount(){
    this.openModalAddAccount.emit();
  }

  copyAddress(divElement:HTMLSpanElement){
    this.clipBoard.copy(divElement?.textContent||"");
  }

}
