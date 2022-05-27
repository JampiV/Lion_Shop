import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductViewComponent } from './products/product-view/product-view.component';

const routes: Routes = [
  {
    
    path:'',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      
      {
        path: ':id/view',
        component: ProductViewComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
