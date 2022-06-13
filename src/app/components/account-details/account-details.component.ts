import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  @Output() openModalEditAccount = new EventEmitter();
  @Output() openModalGetKey = new EventEmitter();
  @Output() openModalTransfer = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openModalEdit(){
    this.openModalEditAccount.emit();
  }

  openModalKey(){
    this.openModalGetKey.emit();
  }

  openModalTrans(){
    this.openModalTransfer.emit();
  }

}
