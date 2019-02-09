import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  { path: 'home', component: MainComponent},
  { path: 'products', component: ProductsPageComponent},
  { path: 'orders', component: OrdersComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
