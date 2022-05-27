import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HeaderComponent } from './header/header.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [

  {
    
    path:'',
    component: AdminHomeComponent,
    children: [
      
      {
        path: 'ventas',
        component: VentasComponent,
      },
      {
        path: 'productos',
        component: ListProductsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
