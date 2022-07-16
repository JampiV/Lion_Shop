import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EditProductoComponent } from './producto/edit-producto/edit-producto.component';
import { NewProductoComponent } from './producto/new-producto/new-producto.component';
import { ProductoListComponent } from './producto/producto-list/producto-list.component';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import { NewCategoriaComponent } from './categoria/new-categoria/new-categoria.component';
import { CompraListComponent } from './compras/ver-compras/ver-compras.component';
import { OfertaListComponent } from './oferta/oferta-list/oferta-list.component';
import { CrearOfertaComponent } from './oferta/crear-oferta/crear-oferta.component';
import { DonacionListComponent } from './donaciones/donaciones.component';
import { SolicitudListComponent } from './solicitudes/solicitudes.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'productos',
        component: ProductoListComponent,
      },
      {
        path: 'productos/new',
        component: NewProductoComponent,
      },
      {
        path: 'productos/:id/edit',
        component: EditProductoComponent,
      },
      {
        path: 'categorias',
        component: CategoriaListComponent,
      },
      {
        path: 'categorias/new',
        component: NewCategoriaComponent,
      },  
      {
        path: 'compras',
        component: CompraListComponent,
      },
      {
        path: 'ofertas',
        component: OfertaListComponent,
      },
      {
        path:'ofertas/crear',
        component: CrearOfertaComponent,
      },
      {
        path: 'donaciones',
        component: DonacionListComponent,
      },
      {
        path: 'solicitudes',
        component: SolicitudListComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
