import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../producto.model';
import { ProductoService } from '../producto.service';
import { Categoria } from '../../../categoria/shared/categoria.model';
import { CategoriaService } from '../../../categoria/shared/categoria.service';



@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  form: FormGroup;
  @Input() producto: Producto = new Producto();
  @Output() onSave: EventEmitter<any>= new EventEmitter();
  
  categoriasid: Categoria [];

  onSubmit: any;
  constructor(
    private productoService: ProductoService,
    private formBuilder:FormBuilder,
    private router:Router,
    private categoriaService:CategoriaService
    ) { }

    getAllCategorias(){
      this.categoriaService.getAllCategorias().subscribe((data)=>{
        this.categoriasid=data;
        console.log(data);
      })
    }
  
  
    ngOnInit(): void {
      this.getAllCategorias();

      this.form = this.formBuilder.group({

        nombre_producto: [
          this.producto.nombre_producto,
          [//FALTA VER
            Validators.required,
            Validators.minLength(2),
        //FALTA VER    Validators.maxLength(100),
          ],
        ],
        categoria_producto: "lo_QUESEA",
        categoria: [
          this.producto.categoria,
          [
            Validators.required,
          ],
        ],
        costo_producto: [
          this.producto.costo_producto
        ],
      });
    }
    
    save(){
      this.onSubmit.emit(this.form.value);
    }

}
