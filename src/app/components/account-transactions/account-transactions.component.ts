import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Transfer from 'src/app/models/transfer';
import Web3Obj from 'src/app/models/web3Obj';
import ITransfer from 'src/app/utils/interfaces/iTransfer';
import { AccountDetailsComponent } from '../account-details/account-details.component';

@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.css']
})
export class AccountTransactionsComponent implements OnInit {
  @Output() openTransDetail = new EventEmitter();
  listTransactions:ITransfer[] = [];
  isAccountSlected:Boolean = false;
  networkInfo = Web3Obj.networkInfo;
  static component:AccountTransactionsComponent;

  constructor() {
    AccountTransactionsComponent.component = this;
  }

  ngOnInit(): void {
  }

  openDetails(){
    this.openTransDetail.emit();
  }

  updateListtransactions(){
    //console.log("private key",AccountDetailsComponent.component.accountSelected?.private_key!)
    Transfer.listAll(AccountDetailsComponent.component.accountSelected?.private_key!)
    .then(transactions=>{
      this.listTransactions = transactions;
    })
  }

}
