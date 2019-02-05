import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'products', component: ProductsPageComponent},
  { path: 'orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
