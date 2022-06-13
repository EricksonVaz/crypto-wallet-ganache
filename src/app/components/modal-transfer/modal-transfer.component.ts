import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-transfer',
  templateUrl: './modal-transfer.component.html',
  styleUrls: ['./modal-transfer.component.css']
})
export class ModalTransferComponent implements OnInit {
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
