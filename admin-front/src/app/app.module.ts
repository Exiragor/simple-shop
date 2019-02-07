import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { MainComponent } from './main/main.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    MainComponent,
    ProductsPageComponent,
    NavComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
