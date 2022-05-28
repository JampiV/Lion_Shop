import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../shared/producto.model';
import { ProductoService } from '../shared/producto.service';



@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  constructor(public productoService: ProductoService, private router: Router) {}

  ngOnInit(): void {}

  editProducto(producto:Producto){
    this.productoService.update(producto).subscribe(
      ()=>{
        this.router.navigate(['/admin/productos']);
      },
      (error: any)=> {}
    );
  }
}