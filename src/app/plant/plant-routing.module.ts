import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantPage } from './plant.page';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { PlantSearchComponent } from './components/plant-search/plant-search.component';

const routes: Routes = [
  {
    path: '',
    component: PlantPage,
    children: [
      {
        path: '',
        component: PlantListComponent
      },
      {
        path: 'search',
        component: PlantSearchComponent
      },
      {
        path: ':id',
        component: PlantDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantPageRoutingModule {}