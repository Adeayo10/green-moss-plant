import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../auth/guards/auth.guard';//remove this if you dont' want to go through auth guard

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    canActivate: [AuthGuard],//remove this if you dont' want to go through auth guard
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'plants',
        loadChildren: () => import('../plant/plant.module').then(m => m.PlantPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'delivery',
        loadChildren: () => import('../delivery/delivery.module').then(m => m.DeliveryPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}