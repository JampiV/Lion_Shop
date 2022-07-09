import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CompraService } from '../compra.service';
import { Compra } from '../compra.model';

@Component({
  selector: 'app-modal-recibo',
  templateUrl: './modal-recibo.component.html',
  styleUrls: ['./modal-recibo.component.css']
})
export class ModalReciboComponent implements OnInit {
  @Input() idCompra: number;
  @Output() onSubmit: EventEmitter<any>= new EventEmitter();

  display: string;

  constructor(private compraService: CompraService) { }

  ngOnInit(): void {
    console.log(this.idCompra);
    //this.compraService.getCompraById(this.idCompra);
  }


}
