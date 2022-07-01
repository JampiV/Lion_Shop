import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcesoCompraComponent } from './carrito/proceso-compra/proceso-compra.component';
import { ModalitoComponent } from './carrito/shared/modalito/modalito.component';
import { VerCarritoComponent } from './carrito/ver-carrito/ver-carrito.component';
import { CompraListComponent } from './compras/ver-compras/ver-compras.component';
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
        component: VerCarritoComponent
      },
      {
        path: 'pago',
        component: ProcesoCompraComponent
      },
      {
        path: 'modal',
        component: ModalitoComponent
      }
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

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
