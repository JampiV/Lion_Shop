import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './header/header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { VentasComponent } from './ventas/ventas.component';
import { MaterialModule } from '../material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { ListProductsComponent } from './list-products/list-products.component';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CrearCompuestoComponent } from './crear-compuesto/crear-compuesto.component'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminHomeComponent,
    CrearCompuestoComponent,
    VentasComponent,
    SidenavComponent,
    HeaderComponent,
    ListProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
