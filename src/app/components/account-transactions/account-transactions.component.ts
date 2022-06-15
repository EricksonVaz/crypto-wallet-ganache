import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.css']
})
export class AccountTransactionsComponent implements OnInit {
  @Output() openTransDetail = new EventEmitter();
  arr = [1,2,3,4,5,6,7];
  isAccountSlected:Boolean = false;
  static component:AccountTransactionsComponent;

  constructor() {
    AccountTransactionsComponent.component = this;
  }

  ngOnInit(): void {
  }

  openDetails(){
    this.openTransDetail.emit();
  }

}
