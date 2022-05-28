import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ProductoListComponent } from './products/product-list/product-list.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutComponent,
    ProductoListComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
