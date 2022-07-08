import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-recibo',
  templateUrl: './modal-recibo.component.html',
  styleUrls: ['./modal-recibo.component.css']
})
export class ModalReciboComponent implements OnInit {
  @Output() onSubmit: EventEmitter<any>= new EventEmitter();

  display: string;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseHandled(){
    this.display='none';
  }

  openModal(){
    this.display='block';
 }

}
