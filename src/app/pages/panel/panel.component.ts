import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { getApp } from '@angular/fire/app';
import { getAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  openBackdrop:boolean = false;
  openProfile:boolean = false;
  openAddAccount:boolean = false;
  openEditAccount:boolean = false;
  openTransDetail:boolean = false;
  getPrivateKey:boolean = false;
  openTrans:boolean = false;

  constructor() { }

  ngOnInit(): void {
    const auth = getAuth();
    const user = auth.currentUser

    console.log(user)
  }

  openModalProfile(){
    this.openBackdrop = true;
    this.openProfile = true;
  }

  closeModalProfile(){
    this.openProfile = false;
    this.openBackdrop = false;
  }

  openModalAddAccount(){
    this.openBackdrop = true;
    this.openAddAccount = true;
  }

  openModalEditAccount(){
    this.openBackdrop = true;
    this.openEditAccount = true;
  }

  openModalTransDetail(){
    this.openBackdrop = true;
    this.openTransDetail = true;
  }

  openModalGetKey(){
    this.openBackdrop = true;
    this.getPrivateKey = true;
  }

  openModalTransfer(){
    this.openBackdrop = true;
    this.openTrans = true;
  }

  closeModalAddAccount(){
    this.openBackdrop = false;
    this.openAddAccount = false;
  }

  closeModalEditAccount(){
    this.openBackdrop = false;
    this.openEditAccount = false;
  }

  closeModalTransDetail(){
    this.openBackdrop = false;
    this.openTransDetail = false;
  }

  closeModalPrivateKey(){
    this.openBackdrop = false;
    this.getPrivateKey = false;
  }

  closeModalTransfer(){
    this.openBackdrop = false;
    this.openTrans = false;
  }

}
