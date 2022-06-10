import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop-modal',
  templateUrl: './backdrop-modal.component.html',
  styleUrls: ['./backdrop-modal.component.css']
})
export class BackdropModalComponent implements OnInit {
  @Input() isOpen:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
