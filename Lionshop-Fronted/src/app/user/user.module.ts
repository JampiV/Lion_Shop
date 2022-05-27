import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutComponent,
    ProductListComponent,
    ProductViewComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
