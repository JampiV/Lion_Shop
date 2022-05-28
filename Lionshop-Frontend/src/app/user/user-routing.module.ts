import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
