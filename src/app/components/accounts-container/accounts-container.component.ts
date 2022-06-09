import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-container',
  templateUrl: './accounts-container.component.html',
  styleUrls: ['./accounts-container.component.css']
})
export class AccountsContainerComponent implements OnInit {
  public listAccounts = [
    {
      name:"Account 1",
      address:"0x4rt...itre"
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
  constructor() { }

  ngOnInit(): void {
  }

}
