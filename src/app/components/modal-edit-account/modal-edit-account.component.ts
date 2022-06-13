import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-edit-account',
  templateUrl: './modal-edit-account.component.html',
  styleUrls: ['./modal-edit-account.component.css']
})
export class ModalEditAccountComponent implements OnInit {
  @Input("isOpen") isOpen = false;
  @Output("closeModal") closeModal = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.isOpen = false;
    this.closeModal.emit();
  }
}
