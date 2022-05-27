import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../shared/product.service';
import { Producto } from '../shared/producto.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'nombre', 'stock', 'precio', 'categoria', 'acciones'];
  dataSource: MatTableDataSource<Producto>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getAllProducts().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data['body']);
      
    })
  }

  applyFilter(){
   
  }

}
