import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.css']
})
export class AccountTransactionsComponent implements OnInit {
   arr = [1,2,3,4,5,6,7];
  constructor() { }

  ngOnInit(): void {
  }

}
