import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    },
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'shopping-cart',
      component: ShoppingCartComponent
    },
    {
      path: 'check-out',
      component: CheckOutComponent
    },
    {
      path: 'order-success',
      component: OrderSuccessComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'my/orders',
      component: MyOrdersComponent
    },
    {
      path: 'admin/products',
      component: AdminProductsComponent
    },
    {
      path: 'admin/orders',
      component: AdminOrdersComponent
    },
    {
      path: '**',
      redirectTo: '/',
      pathMatch: 'full'
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
