import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/shared/usuario.model';

import { Compra } from '../shared/compra.model';
import { CompraService } from '../shared/compra.service';


@Component({
  selector: 'app-ver-compras',
  templateUrl: './ver-compras.component.html',
  styleUrls: ['./ver-compras.component.css']
})
export class CompraListComponent implements OnInit {
  usuario =new Usuario();
  public prueba: Array<any> = [];
  estado: any;
  
  
  displayedColumns: string[] = ['nCompra', 'fechaCompra',  'importeTotal', 'estado', 'Recibo'];
  dataSource: MatTableDataSource<Compra>;
  

  constructor(private compraService: CompraService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMisCompras();
  }

  getMisCompras(){
    this.compraService.getMisCompras(Number(sessionStorage.getItem('key'))).subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data['body']);
      console.log(Number(sessionStorage.getItem('idUsuario')));
      this.estado=data['body'].estadoCompra.nombreEstado;
    })
  }
  applyFilter(value: string){
    this.dataSource.filter = value.trim().toLowerCase();
  }

  mover(idProducto:number){
    window.location.replace(`${idProducto}/view`);
  }
  
  
  
}
  