import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from '../../products/shared/product.model';
import { CarritoService } from '../shared/carrito.service';

@Component({
  selector: 'app-ver-carrito',
  templateUrl: './ver-carrito.component.html',
  styleUrls: ['./ver-carrito.component.css']
})
export class VerCarritoComponent implements OnInit {
  dataSource : MatTableDataSource <Producto>;
  displayedColumns: string[] = ['idProducto','nombre_producto', 'categoria_producto', 'costo_producto','Eliminar' ];
  id:any;
  precioPro: any
  delivery: any
  precioTotal:any;
  preciot:any;


  constructor(
    private carritoService: CarritoService,
  ) { }

  ngOnInit(): void {
    this.verProductosCarrito();
  }

  verProductosCarrito(){
    this.carritoService.verCarrito(Number(sessionStorage.getItem('key'))).subscribe((data:any) => {
      this.dataSource = data;
      this.preciot=data.costo_producto;
      var precio=0;
     
      for(let i=0; i< data.length; i++){
       
        precio += data[i].costo_producto ;
        console.log(precio);
      }
      this.precioPro=Number(precio).toFixed(2);
      if(this.precioPro==0){
        this.delivery=Number(0);
      }
      else{
        this.delivery=Number(5);
      }
      
      this.delivery=this.delivery.toFixed(2);
      this.precioTotal=(Number(this.precioPro)+Number(this.delivery)).toFixed(2);
      
    });

    
    


  }
  
      
  eliminarDelCarrito(idProducto:number){
    const ok = confirm('¿Estás seguro de eliminar este producto al carrito de la lista de deseos?');
    if(ok){
      this.carritoService.eliminarDelCarrito(Number(sessionStorage.getItem('key')),idProducto).subscribe(()=>{
        window.location.reload()
      })
       
      }
    }
    
  }


