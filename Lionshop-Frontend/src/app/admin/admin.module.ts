import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NewProductoComponent } from './producto/new-producto/new-producto.component';
import { ProductoListComponent } from './producto/producto-list/producto-list.component';
import { EditProductoComponent } from './producto/edit-producto/edit-producto.component';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormProductoComponent } from './producto/shared/form-producto/form-producto.component';
import { MatSelectModule } from '@angular/material/select';
import { NewCategoriaComponent } from './categoria/new-categoria/new-categoria.component';
import { FormCategoriaComponent } from './categoria/shared/form-categoria/form-categoria.component';
import { CompraListComponent } from './compras/ver-compras/ver-compras.component';
import { EditCompraComponent } from './compras/edit-compra/edit-compra.component';
import { FormCompraComponent } from './compras/shared/form-compra/form-compra.component';
import { EstadocompraListComponent } from './estadocompra/estadocompra-list/estadocompra-list.component';
import { OfertaListComponent } from './oferta/oferta-list/oferta-list.component';
import { CrearOfertaComponent } from './oferta/crear-oferta/crear-oferta.component';
import { FormOfertaComponent } from './oferta/shared/form-oferta/form-oferta.component';
import { DonacionListComponent } from './donaciones/donaciones.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SolicitudListComponent } from './solicitudes/solicitudes.component';


@NgModule({
  declarations: [
    NewProductoComponent,
    ProductoListComponent,
    EditProductoComponent,
    FormProductoComponent,
    CategoriaListComponent,
    NewCategoriaComponent,
    LayoutComponent,
    FormCategoriaComponent,
    CompraListComponent,
    EditCompraComponent,
    FormCompraComponent,
    EstadocompraListComponent,
    OfertaListComponent,
    CrearOfertaComponent,
    FormOfertaComponent,
    DonacionListComponent,
    SolicitudListComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class AdminModule { }
