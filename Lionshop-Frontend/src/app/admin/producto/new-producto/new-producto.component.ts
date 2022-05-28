import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../shared/producto.model';
import { ProductoService } from '../shared/producto.service';



@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css']
})
export class NewProductoComponent implements OnInit {

  constructor(public productoService: ProductoService, private router: Router) {}

  ngOnInit(): void {}

  createProducto(producto:Producto) {
    this.productoService.create(producto).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/admin/producto']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
