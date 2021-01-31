import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./component/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./component/register/register.module').then(m => m.RegisterModule) },
  { path: 'favorite', loadChildren: () => import('./component/favorite/favorite.module').then(m => m.FavoriteModule) },
  { path: 'cart', loadChildren: () => import('./component/cart/cart.module').then(m => m.CartModule) },
  { path: 'product-details/:id', loadChildren: () => import('./component/product-details/product-details.module').then(m => m.ProductDetailsModule) },

  { path: 'admin', loadChildren: () => import('./component/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },

  { path: 'page-not-found', loadChildren: () => import('./component/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
