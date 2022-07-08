import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcesoCompraComponent } from './carrito/proceso-compra/proceso-compra.component';
import { ModalitoComponent } from './carrito/shared/modalito/modalito.component';
import { VerCarritoComponent } from './carrito/ver-carrito/ver-carrito.component';
import { ModalReciboComponent } from './compras/shared/modal-recibo/modal-recibo.component';
import { CompraListComponent } from './compras/ver-compras/ver-compras.component';
import { DonarApartadoComponent } from './donar-apartado/donar-apartado.component';
import { PagarDonacionComponent } from './donar-apartado/pagar-donacion/pagar-donacion.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductoListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {

    path:'',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ProductoListComponent,
      },
      {
        path: 'milista',
        component: VerCarritoComponent,

      },
      {
        path: 'donar',
          component: DonarApartadoComponent,

      },

      {
        path: 'pago/:idD',
        component: ProcesoCompraComponent
      },
      {
        path: 'modal',
        component: ModalitoComponent
      },
      {
        path: 'pagar-donacion',
        component: PagarDonacionComponent
      },
    ]
  },
  {
    path: 'compras',
    component: LayoutComponent,
    children: [
      {
        path: 'miscompras',
        component: CompraListComponent,
      },

    ]
  },
  {
    path: 'modalazo',
    component: ModalReciboComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
