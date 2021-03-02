import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'overview', children: [
        {
          path: '',
          loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule)
        }]
      },
      {
        path: 'coupons', children: [
          {
            path:'',
            loadChildren: () => import('./coupons/coupons.module').then( m => m.CouponsPageModule)
          }
        ]
      },
      {
        path: 'recipes', children: [
          {
            path:'',
            loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/overview',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
