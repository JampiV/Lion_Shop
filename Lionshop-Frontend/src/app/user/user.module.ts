import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ProductoListComponent } from './products/product-list/product-list.component';
import { MaterialModule } from '../material/material.module';
import { VerCarritoComponent } from './carrito/ver-carrito/ver-carrito.component';
import { CompraListComponent } from './compras/ver-compras/ver-compras.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ProductoListComponent,
    LayoutComponent,
    VerCarritoComponent,
    CompraListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
