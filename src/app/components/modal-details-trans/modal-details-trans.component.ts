import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-details-trans',
  templateUrl: './modal-details-trans.component.html',
  styleUrls: ['./modal-details-trans.component.css']
})
export class ModalDetailsTransComponent implements OnInit {
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
