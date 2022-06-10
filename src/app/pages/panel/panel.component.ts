import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  openBackdrop:boolean = false;
  openProfile:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openModalProfile(){
    this.openBackdrop = true;
    this.openProfile = true;
  }

  closeModalProfile(){
    this.openProfile = false;
    this.openBackdrop = false;
  }

}
