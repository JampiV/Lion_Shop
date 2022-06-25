import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Producto } from '../shared/product.model';
import { ProductoService } from '../shared/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductoListComponent implements OnInit {

  displayedColumns: string[] = ['idProducto', 'nombre_producto', 'categoria_producto', 'costo_producto', 'Agregar'];
  dataSource : MatTableDataSource<Producto>;


  constructor(private productoService:ProductoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProductos();
    console.log(sessionStorage.getItem('idUsuario'))
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
  
  agregarAlCarrito(idProduct:any){
    if (sessionStorage.getItem('key')==null){
      const oks = confirm('Debes iniciar sesión para poder agregar productos al carrito');
      if(oks){
        this.router.navigate(['../login']);

      }
    }
    else{
      const ok = confirm('¿Estás seguro de agregar este producto al carrito de compras?');
    if(ok){
      this.productoService.agregarAlCarrito(Number(sessionStorage.getItem('key')),idProduct ).subscribe(()=>{

      })
    }
    }



  }


}
