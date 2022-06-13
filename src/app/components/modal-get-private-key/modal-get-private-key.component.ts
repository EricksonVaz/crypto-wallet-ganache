import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-get-private-key',
  templateUrl: './modal-get-private-key.component.html',
  styleUrls: ['./modal-get-private-key.component.css']
})
export class ModalGetPrivateKeyComponent implements OnInit {
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
