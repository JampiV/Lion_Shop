import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from '../shared/product.model';
import { ProductoService } from '../shared/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductoListComponent implements OnInit {

  displayedColumns: string[] = ['idProducto', 'nombre_producto', 'categoria_producto', 'costo_producto', 'acciones'];
  dataSource : MatTableDataSource<Producto>;


  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.getAllProductos();
  }

  getAllProductos(){
    this.productoService.getAllProductos().subscribe((data:any)=>{
          this.dataSource=new MatTableDataSource(data['body']);
          //console.log(data['body'])
        });
  }
  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }


}
