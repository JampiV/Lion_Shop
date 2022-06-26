import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Oferta } from '../shared/oferta.model';
import { OfertaService } from '../shared/oferta.service';

@Component({
  selector: 'app-oferta-list',
  templateUrl: './oferta-list.component.html',
  styleUrls: ['./oferta-list.component.css']
})
export class OfertaListComponent implements OnInit {

  displayedColumns: string[] = ['idOferta', 'dsctOfertaDeseado', 'cantidadARestar', 'precioActualProducto', 
  'idProducto', 'nombreProducto', 'costoProducto'];
  dataSource: MatTableDataSource<Oferta>;

  constructor(private ofertaService: OfertaService) { }

  ngOnInit(): void {
    this.getAllOfertas();
  }

  getAllOfertas(){
    this.ofertaService.getAllOfertas().subscribe((data:any)=>{
     this.dataSource = new MatTableDataSource(data['body']);
     console.log(data['body']);
    });
  }

}