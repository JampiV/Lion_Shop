import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NewProductoComponent } from './producto/new-producto/new-producto.component';
import { ProductoListComponent } from './producto/producto-list/producto-list.component';
import { EditProductoComponent } from './producto/edit-producto/edit-producto.component';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormProductoComponent } from './producto/shared/form-producto/form-producto.component';
import { MatSelectModule } from '@angular/material/select';
import { NewCategoriaComponent } from './categoria/new-categoria/new-categoria.component';
import { FormCategoriaComponent } from './categoria/shared/form-categoria/form-categoria.component';



@NgModule({
  declarations: [
    NewProductoComponent,
    ProductoListComponent,
    EditProductoComponent,
    FormProductoComponent,
    CategoriaListComponent,
    NewCategoriaComponent,
    LayoutComponent,
    FormCategoriaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class AdminModule { }
